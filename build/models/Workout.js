"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const Progression_1 = require("./Progression");
class Workout {
    constructor(name, progression = new Progression_1.Progression("linear", 5), restBetweenSets = 60) {
        this.name = name;
        this.progression = progression;
        this.restBetweenSets = restBetweenSets;
        this.workoutComponents = [];
    }
    addWorkoutComponent(workoutComponent) {
        this.workoutComponents.push(workoutComponent);
    }
    removeWorkoutComponent(workoutComponent) {
        this.workoutComponents = this.workoutComponents.filter((c) => c !== workoutComponent);
    }
    reorderWorkoutComponent(workoutComponent, newIndex) {
        const oldIndex = this.workoutComponents.findIndex((c) => c === workoutComponent);
        this.workoutComponents.splice(newIndex, 0, this.workoutComponents.splice(oldIndex, 1)[0]);
    }
}
exports.Workout = Workout;
