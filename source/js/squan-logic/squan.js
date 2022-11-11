// This will be where the logic for the virtual Square-1 will exist

import {Layer} from './layer.js';

let pieces = [2, 1, 2, 1, 2, 1, 2, 1]; // array with all the corners (2) and edges (1)
// find way to deal with slice

export class Squan { 
    constructor() {
        let topLayer = new Layer("top", pieces);
        let bottomLayer = new Layer("bottom", pieces);
    }
    slice() {
        console.log("idk how this is gonna work");
    }
}