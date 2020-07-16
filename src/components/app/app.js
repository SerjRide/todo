import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddTodos from '../add-todos/';


import './app.css';

export default class App extends Component {

  maxId = 100;

  createTodoItem = (label) => {
    return {
      label, important: false, done: false, id: this.maxId++
    }
  }

  state = {
    todoDate: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoDate }) => {
      const idx = todoDate.findIndex((el) => el.id === id);
      const newArr = [
        ...todoDate.slice(0, idx),
        ...todoDate.slice(idx + 1)
      ];
      return { todoDate: newArr };
    });
  };

  addItem = (txt) => {
    const newItem = this.createTodoItem(txt);

    this.setState(({ todoDate }) => {
      const newArr = [...todoDate, newItem];
      return { todoDate: newArr }
    });
  };

  toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName]
      };

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoDate }) => {
      return {
        todoDate: this.toggleProperty(todoDate, id, 'important')
      }
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoDate }) => {
      return {
        todoDate: this.toggleProperty(todoDate, id, 'done')
      }
    });
  };

  render() {
    const { todoDate } = this.state;
    const doneCount = todoDate.filter((el) => el.done).length
    const todoCount = todoDate.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ todoDate }
          onDeleted = { this.deleteItem }
          onToggleImportant = { this.onToggleImportant }
          onToggleDone = { this.onToggleDone }/>
        <AddTodos
          onAdd={ this.addItem }/>
      </div>
    );
  };


};
