import React from 'react';
import PropTypes from "prop-types";
import "./Workout.css";
import { Link } from 'react-router-dom';


function Workout(props) {
  console.log({props});
  return (
    <div className="workout">
      <Link to={`/workouts/${props.id}`}><span><b>{props.workoutName}</b></span></Link>
    </div>
  );
}

Workout.propTypes = {
  workoutDate: PropTypes.string.isRequired,
  workoutExerciseName: PropTypes.string.isRequired
};

export default Workout;