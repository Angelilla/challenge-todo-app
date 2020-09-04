import React, { Component } from 'react';
import './App.css';
import FormTodoCreate from './components/CreateTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormTodoCreate/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
