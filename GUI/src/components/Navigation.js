import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Navigation(props) {
  return (
    <ul className="navbar">
      <li><Link to="/exercises">Exercises</Link></li>
      <li><Link to="/workouts">Workouts</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
  );
}

export default Navigation;