import React, { Component } from 'react';
// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
// import Filter from './components/Filter';
// import Form from './components/Form';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  render() {
    return (
      <Container>
        <TodoList todos={initialTodos}/>
        {/* <Form onSubmit={this.formSubmitHandler}/> */}
      </Container>
    )
  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
