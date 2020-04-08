import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Logo from './logo.png'
import './components/Todo.css'

const todo = [
  {
    task: 'Walk The Dog',
    id: 12,
    completed: false,
  },
  {
    task: 'Workout',
    id: 123,
    completed: false,
  },
  {
    task: 'Make Lunch',
    id: 1234,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the completed field
    // otherwise return the item untouched
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
        <div className="App">
          <img class ="logo" src={Logo} alt="website logo"/>
          <div className="header">
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            todo={this.state.todo}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
    );
  }
}

export default App;
