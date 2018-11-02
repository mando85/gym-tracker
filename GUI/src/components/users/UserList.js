import React from "react";

// import the User component
import User from "./User.js"

function UserList(props) {
  return (
    <div>
        {props.users.map(u => <User key={u.id} id={u.id} firstName={u.firstName} lastName={u.lastName} />)}
    </div>
  );
}

export default UserList;