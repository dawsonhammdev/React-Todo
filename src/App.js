import React from 'react';

const todo = [
  {
    task: 'Walk The Dog',
    id: 123,
    completed: false
  },
  {
    task: 'Workout',
    id: 123,
    completed: false
  },
  {
    task: 'Make Lunch',
    id: 123,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  render() {
    return (
      <div>
        <h2>To Do Or Not To Do</h2>
      </div>
    );
  }
}

export default App;
