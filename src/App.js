import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm.js';
import Task from './Task/Task.js';
import './App.css';

class App extends Component {
    state = {
        tasks: [
            {text: "Buy milk", id: 1570041853066},
            {text: "Walk with dog", id: 1570041880519},
            {text: "Do homework", id: 1570041920486}
        ],
        currentTask: "",
        showTasks: true
    };

    addTask = (event) => {
        event.preventDefault();
        const tasks = [...this.state.tasks];
        const id = Date.now();
        const newTask = {text: this.state.currentTask, id: id};
        tasks.push(newTask);
        this.setState({tasks});
    };

    typeTask = (event) => {
        let currentTask = [...this.state.currentTask];
        currentTask = event.target.value;
        this.setState({currentTask});
    };

    removeTask = (id) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(item => id === item.id);
        tasks.splice(index, 1);
        this.setState({tasks});
    };

    render() {
        return (
            <div className="App">
                <div>
                    <AddTaskForm
                        value={this.state.currentTask}
                        click={(e) => this.addTask(e)}
                        change={(e) => this.typeTask(e)}
                    />
                </div>
                {
                    this.state.showTasks ?
                        <div>
                            {
                                this.state.tasks.map((task) => {
                                    return (
                                        <Task
                                            key={task.id}
                                            image="img/ic_delete.png"
                                            alt={"Delete"}
                                            text={task.text}
                                            remove={() => this.removeTask(task.id)}
                                        >
                                        </Task>
                                    );
                                })
                            }
                        </div> : null
                }

            </div>
        );
    }
}

export default App;
