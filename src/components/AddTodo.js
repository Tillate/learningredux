import { connect } from "react-redux";
import React, { Component } from "react";
import { addTodo } from "../store/actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  submitTodo = () => {
    this.props.addTodo({
      name: this.input.current.value,
      done: false
    })
    this.input.current.value='';
  };

  render() {
    return (
      <div className="d-flex mb-4 gap-5">
        <input ref={this.input} type="text" className="form-control" />
        <button className="btn btn-success" onClick={this.submitTodo}>
          Ajouter
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
