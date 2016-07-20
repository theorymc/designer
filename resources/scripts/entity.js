class Entity {
    constructor(width, height, x, y, z, rx, ry, rz, scale) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.z = z;
        this.rx = rx;
        this.ry = ry;
        this.rz = rz;
        this.scale = scale;

        this.element = this.createElement();
        this.update();
    }

    createElement() {
        return jQuery("<div />").addClass("entity");
    }

    update() {
        var dimensions = this.getDimensions();

        this.element.css({
            "width": dimensions.width + "px",
            "height": dimensions.height + "px",
            "left": dimensions.x + "px",
            "top": dimensions.y + "px",
            "transform": "translateZ(" + dimensions.z + "px) rotateX(" + dimensions.rx + "deg) rotateY(" + dimensions.ry + "deg) rotateZ(" + dimensions.rz + "deg) scale(" + dimensions.scale + ")"
        });
    }

    getDimensions() {
        return {
            "width": this.width,
            "height": this.height,
            "x": this.x,
            "y": this.y,
            "z": this.z,
            "rx": this.rx,
            "ry": this.ry,
            "rz": this.rz,
            "scale": this.scale
        };
    }
}
