import React, { Component } from 'react';

import './add-todos.css';

export default class AddTodos extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: ''
    })
  }


  render() {

    return (
      <form className="add-todos form-inline"
            onSubmit={ this.onSubmit }>
        <input  type="text"
                className="form-control"
                onChange={ this.onLabelChange }
                placeholder="What needs to be done?"
                value={ this.state.label }/>
        <button className="btn btn-outline-info btn-sm float-right">
          <i className ="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    );
  };

};
