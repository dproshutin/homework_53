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
        currentTask: null,
        currentTaskTime: null,
        showTasks: true
    };

    addTask = (e) => {
        e.defaultPrevented();
        const existingTasks = [...this.state.tasks];
        // const id = Date.now();
        const newTask = {text: this.state.currentTask, id: this.state.currentTime};
        console.log("Hello");
        existingTasks.push(newTask);

        this.setState({tasks: existingTasks});
        console.log(this.state);
    };

    typeTask = (event) => {
        const message = event.target.value;
        console.log(message);
        this.setState({currentTask: message});
        this.setState({currentTaskTime: Date.now()});
    };

    removeTask = (id) => {
        const existingTasks = [...this.state.tasks];
        const index = existingTasks.findIndex(item => id === item.id);
        existingTasks.splice(index, 1);
        this.setState({tasks: existingTasks});
    };

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div>
                    <AddTaskForm/>
                </div>
                {
                    this.state.showTasks ?
                        <div>
                            {
                                this.state.tasks.map((task) => {
                                    return (
                                        <Task
                                            image="img/ic_delete.png"
                                            alt={"Delete"}
                                            text={task.text}
                                            click={(e) => this.addTask(e)}
                                            change={(e) => this.typeTask(e)}
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
