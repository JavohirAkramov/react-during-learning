import React from "react";
import "./Edited.css";

export default function Edited(props) {
  let remove = (id) => {
    props.remove(id);
  };

  return (
    <div className="item__edited">
      <input
        className="item__checkbox"
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleCompleted(props.id)}
      />
      <span
        className="item__description"
        onDoubleClick={() => props.toggleEdit()}
      >
        {props.name}
      </span>

      <button
        className="item__edit item__button"
        onClick={() => props.toggleEdit()}
      >
        Edit
      </button>
      <button
        className="item__delete item__button"
        onClick={() => remove(props.id)}
      >
        Delete
      </button>
    </div>
  );
}
