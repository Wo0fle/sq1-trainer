// This will be where the logic for each virtual Square-1 layer will be

export class Layer { 
    constructor(type) {
        this.type = type;

        const pieces = [2, 1, 2, 1, 2, 1, 2, 1];
    }
    turnClockwise() {
        if (this.type == "top") {
            let lastPiece = pieces.shift();
            pieces.push(lastPiece)
            // idk how js works
        }
    }
    turnCounterclockwise() {
        console.log("U'/D'");
    }
}