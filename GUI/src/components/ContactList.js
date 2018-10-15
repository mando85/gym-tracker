import React from "react";

// import the Contact component
import Contact from "./Contact.js"

function ContactList(props) {
  return (
    <div>
        {props.contacts.map(c => <Contact key={c.id} name={c.name} email={c.email} />)}
    </div>
  );
}

export default ContactList;