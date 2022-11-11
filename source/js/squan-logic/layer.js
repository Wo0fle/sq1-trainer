// This will be where the logic for each virtual Square-1 layer will be

const pieces = [2, 1, 2, 1, 2, 1, 2, 1]; // order of corners (2) and edges (1) in cubeshape as the starting position

export class Layer { 
    constructor(type=String) {
        this.type = type;
    }
    turnClockwise() {
        if (this.type == "top") {
            let lastPiece = pieces.pop(); // take out last piece
            pieces.unshift(lastPiece); // put it in the first spot
        }
        if (this.type == "bottom") {
            let firstPiece = pieces.shift(); // take out first piece
            pieces.push(firstPiece); // put it in the last spot
        }
    }
    turnCounterclockwise() {
        if (this.type == "top") {
            let firstPiece = pieces.shift(); // take out first piece
            pieces.push(firstPiece); // put it in the last spot
        }
        if (this.type == "bottom") {
            let lastPiece = pieces.pop(); // take out last piece
            pieces.unshift(lastPiece); // put it in the first spot
        }
    }
}