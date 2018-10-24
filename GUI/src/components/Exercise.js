import React from "react";
import PropTypes from "prop-types";
import "./Exercise.css";

function Exercise(props) {
  return (
    <div className="exercise">
      <span><b>{props.name}</b> <br /> {props.description}</span>
    </div>
  );
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired
};

export default Exercise;