import React, { useState } from "react";
import "./Todo.css";
import Editing from "./Editing/Editing";
import Edited from "./Edited/Edited";

export default function Todo(props) {
  let [isEditing, setEditing] = useState(false);

  let toggleEdit = () => {
    setEditing(!isEditing);
  };

  return (
    <li className="item">
      {isEditing ? (
        <Editing
          name={props.name}
          id={props.id}
          toggleEdit={toggleEdit}
          edit={props.edit}
        />
      ) : (
        <Edited
          name={props.name}
          id={props.id}
          completed={props.completed}
          toggleEdit={toggleEdit}
          remove={props.remove}
          toggleCompleted={props.toggleCompleted}
        />
      )}
    </li>
  );
}
