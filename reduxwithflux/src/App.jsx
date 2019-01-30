import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions.js';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props
    return (
      <div>
      <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
      <TodoList todos = {visibleTodos}/>
   </div>
    );
  }
}
function select(state) {
  return {
     visibleTodos: state.todos
  }
}

export default App;
