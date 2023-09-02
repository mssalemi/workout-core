"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgram = void 0;
class WorkoutProgram {
    constructor(progression, days = 3, name = "TEST PROGRAM", workouts = []) {
        this.progression = progression;
        this.days = days;
        this.name = name;
        this.workouts = workouts;
    }
    addWorkout(workout) {
        this.workouts.push(workout);
    }
    removeWorkout(workout) {
        this.workouts = this.workouts.filter((c) => c !== workout);
    }
    reorderWorkout(workout, newIndex) {
        const oldIndex = this.workouts.findIndex((c) => c.name === workout.name);
        this.workouts.splice(newIndex, 0, this.workouts.splice(oldIndex, 1)[0]);
    }
    // TODO: Numerical/Alphabetical ordering
    generateWorkoutProgram(weeks = 2) {
        console.log("Workout Program: ", this.name);
        console.log("Total Weeks:", weeks);
    }
    calculateProgression(currentWeight, currentReps) {
        if (this.progression.type === "linear") {
            // Implement linear progression logic here
            // Example: Add 'this.progression.increment' to the weight each week
        }
        else if (this.progression.type === "rep") {
            // Implement rep progression logic here
            // Example: Increase reps by 'this.progression.increment' while keeping weight constant
        }
    }
}
exports.WorkoutProgram = WorkoutProgram;
