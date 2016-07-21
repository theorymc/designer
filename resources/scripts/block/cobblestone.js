class Cobblestone extends Block {
    getBackgroundFor(type) {
        return "url(" + this.getTextures().random() + ")";
    }

    getTextures() {
        return [
            "resources/textures/64x64/cobblestone-1.png",
            "resources/textures/64x64/cobblestone-2.png",
            "resources/textures/64x64/cobblestone-3.png",
            "resources/textures/64x64/cobblestone-4.png",
            "resources/textures/64x64/cobblestone-5.png",
            "resources/textures/64x64/cobblestone-6.png",
            "resources/textures/64x64/cobblestone-7.png",
            "resources/textures/64x64/cobblestone-8.png",
            "resources/textures/64x64/cobblestone-9.png",
            "resources/textures/64x64/cobblestone-10.png",
            "resources/textures/64x64/cobblestone-11.png",
        ];
    }
}

Block.Cobblestone = Cobblestone;
