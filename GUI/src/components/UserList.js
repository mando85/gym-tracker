import React from "react";

// import the User component
import User from "./User.js"

function UserList(props) {
  return (
    <div>
        {props.users.map(u => <User key={u.id} firstName={u.firstName} surname={u.surname} />)}
    </div>
  );
}

export default UserList;