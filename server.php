<?php

require 'vendor/autoload.php';

use Theory\Builder\Client;
use Icicle\Http\Message\{BasicResponse, Request, Response};
use Icicle\Http\Server\{RequestHandler, Server};
use Icicle\Loop;
use Icicle\Socket\Socket;
use Icicle\Stream\MemorySink;

class ExampleRequestHandler implements RequestHandler
{
    private $builder;

    public function __construct() {
        $this->builder = new Client("127.0.0.1", 25575, "hello");
    }

    public function onRequest(Request $request, Socket $socket): Generator
    {
        $data = sprintf(
            'Hello to %s:%d from %s:%d!',
            $socket->getRemoteAddress(),
            $socket->getRemotePort(),
            $socket->getLocalAddress(),
            $socket->getLocalPort()
        );

        $path = $request->getRequestTarget()->getPath();
        $parts = explode("/", trim($path, "/"));

        if ($parts[0] == "set" && count($parts) >= 5) {
            $command = "/setblock {$parts[1]} {$parts[2]} {$parts[3]} {$parts[4]}";

            if (count($parts) > 5) {
                $command .= " {$parts[5]}";
            }

            $this->builder->exec($command);
        }

        if ($parts[0] == "unset" && count($parts) == 4) {
            $this->builder->exec("/setblock {$parts[1]} {$parts[2]} {$parts[3]} air");
        }

        $sink = new MemorySink();
        yield from $sink->end("ok");

        $response = new BasicResponse(200, [
            'Content-Type' => 'text/plain',
            'Content-Length' => $sink->getLength(),
        ], $sink);

        return $response;
    }

    public function onError(int $code, Socket $socket): Response
    {
        return new BasicResponse($code);
    }
}

$server = new Server(new ExampleRequestHandler());
$server->listen(8080);

Loop\run();
