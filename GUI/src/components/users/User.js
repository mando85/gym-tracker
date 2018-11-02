import React from 'react';
import PropTypes from "prop-types";
import "./User.css";
import { Link } from 'react-router-dom';


function User(props) {
  console.log({props});
  return (
    <div className="user">
      <Link to={`/users/${props.id}`}><span><b>{props.firstName}</b> <br /> {props.lastName}</span></Link>
    </div>
  );
}

User.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default User;