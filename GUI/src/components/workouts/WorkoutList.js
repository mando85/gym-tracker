import React from "react";

// import the User component
import Workout from "./Workout.js"

function WorkoutList(props) {
  return (
    <div>
        {props.workouts.map(w => <Workout key={w.id} id={w.id} workoutDate={w.workoutDate} workoutExerciseName={w.workoutExerciseName} />)}

        
    </div>
  );
}

export default WorkoutList;

// workoutDate: '',
// exerciseCategory: '',
// workoutExerciseName: '',
// noOfReps: '',
// noOfSets: '',
// noOfMinutes: ''