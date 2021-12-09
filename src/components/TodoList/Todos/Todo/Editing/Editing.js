import React, { useState } from "react";
import "./Editing.css";

export default function Editing(props) {
  const [changedName, setChangedName] = useState(props.name);

  let cancelHandler = () => {
    props.toggleEdit();
  };
  let saveHandler = () => {
    props.edit(props.id, changedName);
    props.toggleEdit();
  };
  let changeHandler = (e) => {
    setChangedName(e.target.value);
  };
  return (
    <div className="editing">
      <input
        className="editing__input"
        value={changedName}
        onChange={(e) => changeHandler(e)}
      />
      <button className="editing__button" onClick={() => cancelHandler()}>
        Cancel
      </button>
      <button className="editing__button" onClick={() => saveHandler()}>
        Save
      </button>
    </div>
  );
}
