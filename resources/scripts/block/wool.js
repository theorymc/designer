class Wool extends Block {
    getBackgroundFor(type) {
        return "url(" + this.getTextures()[this.state] + ")";
    }

    getName() {
        return "wool";
    }

    getTextures() {
        return [
            "resources/textures/64x64/wool-white.png",
            "resources/textures/64x64/wool-orange.png",
            "resources/textures/64x64/wool-magenta.png",
            "resources/textures/64x64/wool-light-blue.png",
            "resources/textures/64x64/wool-yellow.png",
            "resources/textures/64x64/wool-lime.png",
            "resources/textures/64x64/wool-pink.png",
            "resources/textures/64x64/wool-grey.png",
            "resources/textures/64x64/wool-light-grey.png",
            "resources/textures/64x64/wool-cyan.png",
            "resources/textures/64x64/wool-purple.png",
            "resources/textures/64x64/wool-blue.png",
            "resources/textures/64x64/wool-brown.png",
            "resources/textures/64x64/wool-green.png",
            "resources/textures/64x64/wool-red.png",
            "resources/textures/64x64/wool-black.png",
        ];
    }

    getStates() {
        return this.getTextures().length;
    }
}

Block.Wool = Wool;
