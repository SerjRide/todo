import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddTodos from '../add-todos/';


import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoDate: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoDate }) => {
      const idx = todoDate.findIndex((el) => el.id === id);
      const newArr = [
        ...todoDate.slice(0, idx),
        ...todoDate.slice(idx + 1)
      ];
      return {
        todoDate: newArr
      };
    });
  };

  addItem = (txt) => {
    const newItem = {
      label: txt, important: false, id: this.maxId++
    };

    this.setState(({ todoDate }) => {
      const newArr = [...todoDate, newItem];
      return { todoDate: newArr }
    });
  };

  render() {
    const { todoDate } = this.state;


    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ todoDate }
          onDeleted = { this.deleteItem }/>
        <AddTodos
          onAdd={ this.addItem }/>
      </div>
    );
  };


};
