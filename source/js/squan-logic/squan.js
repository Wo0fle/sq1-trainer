// This will be where the logic for the virtual Square-1 will exist

import {Layer} from './layer.js';

const pieces = [2, 1, 2, 1, 0, 2, 1, 2, 1]; // array with all the corners (2), edges (1), and the slice (0)

export class Squan { 
    constructor() {
        let topLayer = new Layer("top", pieces);
        let bottomLayer = new Layer("bottom", pieces);
    }
    slice() {
        console.log("idk how this is gonna work");
    }
}