class Dirt extends Block {
    getBackgroundFor(type) {
        if (type == "top" || type == "bottom") {
            return "url(" + this.getTextures().top.random() + ")";
        }

        return "url(" + this.getTextures().side.random() + ")";
    }

    getTextures() {
        return {
            "top": [
                "resources/textures/64x64/dirt-top-1.png",
                "resources/textures/64x64/dirt-top-2.png",
                "resources/textures/64x64/dirt-top-3.png"
            ],
            "side": [
                "resources/textures/64x64/dirt-side-1.png",
                "resources/textures/64x64/dirt-side-2.png",
                "resources/textures/64x64/dirt-side-3.png",
                "resources/textures/64x64/dirt-side-4.png",
                "resources/textures/64x64/dirt-side-5.png"
            ]
        };
    }
}

Block.Dirt = Dirt;
