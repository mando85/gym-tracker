import React from "react";
import PropTypes from "prop-types";

function Exercise(props) {
  return (
    <div className="exercise">
      <span>{props.name}: {props.description}</span>
    </div>
  );
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired
};

export default Exercise;