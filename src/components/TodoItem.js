import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      className="list-group-item d-flex flex-row justify-content-between
              align-items-center list-group-item-action"
      onClick={toggleTodo}
    >
      <span> {todo.name} </span>
      <span>
        <input className="mx-3" checked={todo.done} onChange={()=> {}} type="checkbox" />
        <button
          className="btn btn-sm btn-danger"
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo();
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
