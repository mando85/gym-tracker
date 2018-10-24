import React from 'react';
import PropTypes from "prop-types";
import "./Workout.css";


function Workout(props) {
  return (
    <div className="workout">
      <span>{props.workoutDate} {props.workoutExercises}</span>
    </div>
  );
}

Workout.propTypes = {
  workoutDate: PropTypes.string.isRequired,
  workoutExercises: PropTypes.string.isRequired
};

export default Workout;