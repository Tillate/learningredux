import React from "react";

const AddTodo = (props) => {
  return (
    <div className="d-flex mb-4 gap-5">
      <input type="text" className="form-control" />
      <button className="btn btn-success"> Ajouter </button>
    </div>
  );
};

export default AddTodo;
