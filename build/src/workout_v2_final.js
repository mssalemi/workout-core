"use strict";
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
class Progression {
    constructor(type, increment) {
        this.type = type;
        this.increment = increment;
    }
}
class WorkoutComponent2 {
    constructor(exercises = []) {
        this.exercises = exercises;
    }
    addExercise(exercise) {
        this.exercises.push(exercise);
    }
    removeExercise(exercise) {
        this.exercises = this.exercises.filter((e) => e.name !== exercise.name);
    }
    reorderExercise(exercise, newIndex) {
        const oldIndex = this.exercises.findIndex((e) => e.name === exercise.name);
        this.exercises.splice(newIndex, 0, this.exercises.splice(oldIndex, 1)[0]);
    }
}
class WorkoutProgram2 {
    constructor(maxComponents = 10, restBetweenSets = 60, progression) {
        this.workoutComponents = [];
        this.maxComponents = maxComponents;
        this.restBetweenSets = restBetweenSets;
        this.progression = progression;
    }
    addWorkoutComponent(component) {
        // Update this to error?
        if (this.workoutComponents.length < this.maxComponents) {
            this.workoutComponents.push(component);
        }
        else {
            console.log("Maximum number of components reached.");
        }
    }
    removeWorkoutComponent(component) {
        this.workoutComponents = this.workoutComponents.filter((c) => c !== component);
    }
    displayWorkout() {
        console.log("Workout Program:");
        for (const component of this.workoutComponents) {
            console.log("Workout Component:");
            for (const exercise of component.exercises) {
                console.log(`Exercise: ${exercise.name}`);
                console.log(`Sets: ${exercise.sets}`);
                console.log(`Reps: ${exercise.reps}`);
                console.log(`Weight: ${exercise.weight}`);
                if (exercise.rest) {
                    console.log(`Rest: ${exercise.rest}`);
                }
                console.log("---");
            }
        }
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
// Example usage:
const exercise1 = new Exercise("Squat", 3, 10, 100);
const exercise2 = new Exercise("Bench Press", 3, 8, 80);
const exercise3 = new Exercise("Deadlift", 3, 5, 150);
const component1 = new WorkoutComponent2([exercise1, exercise2]);
const component2 = new WorkoutComponent2([exercise3]);
const linearProgression = new Progression("linear", 5);
const program = new WorkoutProgram2(10, 60, linearProgression);
program.addWorkoutComponent(component1);
program.addWorkoutComponent(component2);
program.displayWorkout();
// To calculate progression for an exercise
program.calculateProgression(exercise1.weight, exercise1.reps);
