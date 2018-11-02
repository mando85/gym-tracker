import React from "react";

// import the Exercise component
import Exercise from "./Exercise.js"

function ExerciseList(props) {
  return (
    <div>
        {props.exercises.map(e => <Exercise key={e.id} id={e.id} exerciseName={e.exerciseName} exerciseCategory={e.exerciseCategory} />)}
    </div>
  );
}

export default ExerciseList;