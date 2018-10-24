import React from "react";
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul>
      <li><Link to="/exercises">Exercises</Link></li>
      <li><Link to="/workouts">Workouts</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
  );
}

export default Navigation;
