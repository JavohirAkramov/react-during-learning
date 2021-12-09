import React, { useState } from "react";
import "./Add.css";

let Add = (props) => {
  const [todoName, setTodoName] = useState("");

  let changeHandler = (e) => {
    setTodoName(e.target.value);
  };

  function addHandler(evt) {
    evt.preventDefault();

    if (todoName !== "") {
      props.add(todoName);
      setTodoName("");
    } else alert("Enter task name, please");
  }

  return (
    <>
      <form
        onSubmit={addHandler}
        className="add add-form"
        action="https://echo.htmlacademy.ru"
        method="POST"
      >
        <input
          type="text"
          className="add__input"
          value={todoName}
          name="todo-name"
          onChange={(e) => changeHandler(e)}
        />
        <button type="submit" className="add__button">
          Add
        </button>
      </form>
    </>
  );
};

export default Add;
