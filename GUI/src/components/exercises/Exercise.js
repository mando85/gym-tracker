import React from "react";
import PropTypes from "prop-types";
import "./Exercise.css";
import { Link } from 'react-router-dom';

function Exercise(props) {
  console.log({props});
  return (
    <div className="exercise">
        <Link to={`/exercises/${props.id}`}><span><b>{props.exerciseName}</b> <br /> {props.exerciseCategory}</span></Link>
    </div>
  );
}

Exercise.propTypes = {
  exerciseName: PropTypes.string.isRequired
};

export default Exercise;