import React from 'react';

const todo = [
  {
    task: 'Walk The Dog',
    id: "3:00",
    completed: false
  },
  {
    task: 'Workout',
    id: "3:15",
    completed: false
  },
  {
    task: 'Make Lunch',
    id: "3:30",
    completed: false
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
      name: item,
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

  render() {
    return (
      <div>
        <h2>To Do Or Not To Do</h2>
      </div>
    );
  }
}

export default App;
