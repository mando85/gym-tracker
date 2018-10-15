import React from "react";

// import the Exercise component
import Exercise from "./Exercise.js"

function ExerciseList(props) {
  return (
    <div>
        {props.exercises.map(e => <Exercise key={e.id} name={e.name} description={e.description} />)}
    </div>
  );
}

export default ExerciseList;