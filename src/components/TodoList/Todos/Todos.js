import React from "react";
import Todo from "./Todo/Todo";
import "./Todos.css";

export default function Todos(props) {
  let todoItems = props.items.map((item) => (
    <Todo
      name={item.name}
      id={item.id}
      completed={item.completed}
      remove={props.remove}
      edit={props.edit}
      toggleCompleted={props.toggleCompleted}
    />
  ));

  return (
    <div className="todos">
      <ul className="todos__list">{todoItems}</ul>
    </div>
  );
}
