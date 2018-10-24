import React from "react";

// import the User component
import Workout from "./Workout.js"

function WorkoutList(props) {
  return (
    <div>
        {props.workouts.map(w => <Workout key={w.id} workoutDate={w.workoutDate} workoutExercises={w.workoutExercises} />)}
    </div>
  );
}

export default WorkoutList;