import React from "react";
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul>
      <Link to="/exercises">Exercises</Link><br />
      <Link to="/workouts">Workouts</Link><br />
      <Link to="/users">Users</Link><br />
    </ul>
  );
}

export default Navigation;
