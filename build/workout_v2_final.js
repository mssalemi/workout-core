"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgram = exports.Workout = exports.WorkoutComponent = exports.Progression = exports.Exercise = void 0;
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
class Progression {
    constructor(type, increment) {
        this.type = type;
        this.increment = increment;
    }
}
exports.Progression = Progression;
class WorkoutComponent {
    constructor(excercises = []) {
        this.excercises = excercises;
    }
    addExercise(exercise) {
        this.excercises.push(exercise);
    }
    removeExercise(exercise) {
        this.excercises = this.excercises.filter((e) => e.name !== exercise.name);
    }
    reorderExercise(exercise, newIndex) {
        const oldIndex = this.excercises.findIndex((e) => e.name === exercise.name);
        this.excercises.splice(newIndex, 0, this.excercises.splice(oldIndex, 1)[0]);
    }
}
exports.WorkoutComponent = WorkoutComponent;
class Workout {
    constructor(name, progression = new Progression("linear", 5), restBetweenSets = 60) {
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
