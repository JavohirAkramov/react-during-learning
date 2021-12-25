import React, { useState } from "react";
import "./TodoList.css";
import Add from "./Add/Add";
import { nanoid } from "nanoid";
import Todos from "./Todos/Todos";

export default function TodoList() {
  const [todo, setTodo] = useState([]);

  let add = (name) => {
    let newItem = { id: nanoid(), name: name, completed: false };
    setTodo([...todo, newItem]);
  };

  let remove = (id) => {
    let filteredList = todo.filter((item) => {
      if (id !== item.id) return item;
    });
    setTodo(filteredList);
  };

  let edit = (id, newName) => {
    let editedList = todo.map((item) => {
      if (id === item.id) return { ...item, name: newName };
      return item;
    });
    setTodo(editedList);
  };

  let toggleCompleted = (id) => {
    let changedList = todo.map((item) => {
      if (id === item.id) return { ...item, completed: !item.completed };
      return item;
    });
    setTodo(changedList);
  };

  return (
    <div className="todo todo-form">
      <h1 className="todo__header">Todo List</h1>
      <Add add={add} />
      <Todos
        items={todo}
        remove={remove}
        edit={edit}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}
