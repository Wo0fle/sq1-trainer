// This will be where the logic for each virtual Square-1 layer will be

export class Layer { 
    constructor(type, pieces) {
        this.type = type;
        this.pieces = pieces;
    }
    turnClockwise() {
        if (this.type == "top") {
            let lastPiece = this.pieces.pop(); // take out last piece
            this.pieces.unshift(lastPiece); // put it in the first spot
        }
        if (this.type == "bottom") {
            let firstPiece = this.pieces.shift(); // take out first piece
            this.pieces.push(firstPiece); // put it in the last spot
        }
    }
    turnCounterclockwise() {
        if (this.type == "top") {
            let firstPiece = this.pieces.shift(); // take out first piece
            this.pieces.push(firstPiece); // put it in the last spot
        }
        if (this.type == "bottom") {
            let lastPiece = this.pieces.pop(); // take out last piece
            this.pieces.unshift(lastPiece); // put it in the first spot
        }
    }
    sliceRemove() {
        // idk
    }
    sliceInsert() {
        // idk
    }
}