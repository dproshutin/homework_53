import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm.js';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {text: "Buy milk", id: 1570041853066},
      {text: "Walk with dog", id: 1570041880519},
      {text: "Do homework", id: 1570041920486}
    ],
    currentTask: null
  };
  render() {
    return (
    );
  }
}

export default App;
