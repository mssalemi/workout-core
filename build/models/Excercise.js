"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
class Exercise {
    constructor(name, sets, reps, weight, rest) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.rest = rest;
    }
    editExercise(opts) {
        Object.assign(this, opts);
    }
}
exports.Exercise = Exercise;
