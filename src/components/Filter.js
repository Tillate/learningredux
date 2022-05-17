import React from "react";
import { Link } from "react-router-dom";

const Filter = (props) => {
  return (
    <>
      <Link to="/all" className="btn btn-primary">Tout</Link>
      <Link to="/done" className="btn btn-primary">Fini</Link>
      <Link to="/active"className="btn btn-primary">En cours</Link>
    </>
  );
};

export default Filter;
