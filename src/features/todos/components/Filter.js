import React from 'react';
import { Link } from 'react-router-dom'

const Filter = (props) => {
  return (
    <>
      <Link to="/todos/all" className="btn btn-primary">Tout</Link>
      <Link to="/todos/done" className="btn btn-primary">Fini</Link>
      <Link to="/todos/active" className="btn btn-primary">En cours</Link>
    </>
  )
}

export default Filter;