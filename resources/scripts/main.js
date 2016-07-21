var size = 64;

var surface = jQuery("<div />").addClass("entity").addClass("surface");

for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 10; y++) {
        var block = new CobblestoneBlock(size, size, x, y, -1, 0, 0, 0, 0.99);

        surface.append(block.element);
    }
}

jQuery(document.body).append(surface);

function getSide(face) {
    var element = jQuery(face);

    if (element.hasClass("top")) {
        return "top";
    }

    if (element.hasClass("side-1")) {
        return "side-1";
    }

    if (element.hasClass("side-2")) {
        return "side-2";
    }

    if (element.hasClass("side-3")) {
        return "side-3";
    }

    if (element.hasClass("side-4")) {
        return "side-4";
    }

    if (element.hasClass("bottom")) {
        return "bottom";
    }

    return;
}

function getChangeForSide(side, x, y, z) {
    if (side == "top") {
        z += 1;
    }

    if (side == "side-1") {
        y += 1;
    }

    if (side == "side-2") {
        x += 1;
    }

    if (side == "side-3") {
        y -= 1;
    }

    if (side == "side-4") {
        x -= 1;
    }

    if (side == "bottom") {
        z -= 1;
    }

    return [x, y, z];
}

jQuery(document.body).on("click", ".face", function(e) {
    var element = jQuery(this);
    var side = getSide(element);

    if (!side) {
        return;
    }

    var previous = element.closest(".block").data("block");

    if (!previous) {
        return;
    }

    if (subtraction) {
        previous.element.remove();
        previous = null;
        return;
    }

    var changes = getChangeForSide(side, previous.x, previous.y, previous.z);
    var x = changes[0];
    var y = changes[1];
    var z = changes[2];

    var next = new CobblestoneBlock(size, size, x, y, z, 0, 0, 0, 0.99);
    surface.append(next.element);
});

var ghost = null;

jQuery(document.body).on("mouseenter", ".face", function(e) {
    if (ghost) {
        ghost.element.remove();
        ghost = null;
    }

    var element = jQuery(this);
    var side = getSide(element);

    if (!side) {
        return;
    }

    var previous = element.closest(".block").data("block");

    if (!previous) {
        return;
    }

    var changes = getChangeForSide(side, previous.x, previous.y, previous.z);
    var x = changes[0];
    var y = changes[1];
    var z = changes[2];

    var block = new CobblestoneBlock(size, size, x, y, z, 0, 0, 0, 0.99);
    surface.append(block.element.addClass("ghost"));

    ghost = block;
});

jQuery(document.body).on("mouseleave", ".face", function(e) {
    if (ghost) {
        ghost.element.remove();
        ghost = null;
    }
});

var cx = null;

jQuery(document.body).on("mousedown", function(e) {
    cx = e.clientX / 10;
});

jQuery(document.body).on("mousemove", function(e) {
    if (!cx) {
        return;
    }

    var next = e.clientX / 10;

    if (next !== cx) {
        dx = (next.toInt() - cx.toInt()).toInt();
        deg = parseInt(jQuery(".rotate-z").val(), 10) - dx;

        if (deg > 360) {
            deg -= 360;
        }

        if (deg < 0) {
            deg += 360;
        }

        jQuery(".rotate-z").val(deg).change();

        cx = next;
    }
});

jQuery(document.body).on("mouseup", function(e) {
    cx = null;
});

jQuery(document.body).on("click", function(e) {
    cx = null;
});

var sx = 60;
var sy = 0;
var sz = 60;

jQuery(".rotate-x").on("change", function(e) {
    sx = this.value;

    surface.css({
        "transform": "rotateX(" + sx + "deg) rotateY(" + sy + "deg) rotateZ(" + sz + "deg)"
    });
});

jQuery(".rotate-y").on("change", function(e) {
    sy = this.value;

    surface.css({
        "transform": "rotateX(" + sx + "deg) rotateY(" + sy + "deg) rotateZ(" + sz + "deg)"
    });
});

jQuery(".rotate-z").on("change", function(e) {
    sz = this.value;

    surface.css({
        "transform": "rotateX(" + sx + "deg) rotateY(" + sy + "deg) rotateZ(" + sz + "deg)"
    });
});

var subtraction = false;

jQuery(document.body).on("keydown", function(e) {
    if (e.altKey) {
        subtraction = true;
        jQuery(this).removeClass("addition").addClass("subtraction");
    }
});

jQuery(document.body).on("keyup", function(e) {
    subtraction = false;
    jQuery(this).removeClass("subtraction").addClass("addition");
});
