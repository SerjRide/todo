import React, { Component } from 'react';

import './add-todos.css';

export default class AddTodos extends Component {

  state = {

  };


  render() {
    const { onAdd } = this.props;
    const txt = 'New Task';

    return (
      <div className="add-todos">
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ () => onAdd(txt) }>
          <i className ="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    );
  };


};
