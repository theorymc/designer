class Block extends Entity {
    createElement() {
        var element = super.createElement();

        element.data("block", this);
        element.addClass("block");

        var size = this.width;

        element.append(this.createElementFace(this.getBackgroundFor("top"), "top", 0, 0, size / 2, 0, 0, 0, 1));
        element.append(this.createElementFace(this.getBackgroundFor("side-1"), "side-1", 0, size / 2, 0, 270, 0, 0, 1));
        element.append(this.createElementFace(this.getBackgroundFor("side-2"), "side-2", size / 2, 0, 0, 0, 90, 0, 1));
        element.append(this.createElementFace(this.getBackgroundFor("side-3"), "side-3", 0, size / -2, 0, 90, 0, 0, 1));
        element.append(this.createElementFace(this.getBackgroundFor("side-4"), "side-4", size / -2, 0, 0, 0, 270, 0, 1));
        element.append(this.createElementFace(this.getBackgroundFor("bottom"), "bottom", 0, 0, size / -2, 180, 0, 0, 1));

        return element;
    }

    createElementFace(background, additional, x, y, z, rx, ry, rz, scale) {
        var size = this.width;
        var face = jQuery("<div />").addClass("entity").addClass("face");

        if (additional) {
            face.addClass(additional);
        }

        face.css({
            "background-image": background,
            "width": size + "px",
            "height": size + "px",
            "transform": "translateX(" + x.toInt() + "px) translateY(" + y.toInt() + "px) translateZ(" + z.toInt() + "px) rotateX(" + rx.toInt() + "deg) rotateY(" + ry.toInt() + "deg) rotateZ(" + rz.toInt() + "deg) scale(" + scale + ")"
        });

        return face;
    }

    getBackgroundFor(type) {
        return "rgba(0, 0, 0, 0.3)";
    }

    getDimensions() {
        var size = this.width;
        var x = (this.x * size).toInt();
        var y = (this.y * size).toInt();
        var z = (this.z * size).toInt() + (size / 2).toInt();

        return jQuery.extend(super.getDimensions(), {
            "x": x,
            "y": y,
            "z": z
        });
    }
}
