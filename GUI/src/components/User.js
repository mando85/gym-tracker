import React from 'react';
import PropTypes from "prop-types";
import "./User.css";


function User(props) {
  return (
    <div className="user">
      <span>{props.firstName} {props.surname}</span>
    </div>
  );
}

User.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default User;