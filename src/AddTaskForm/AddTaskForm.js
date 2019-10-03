import React from 'react';

const AddTaskForm = props => {
    return (
        <form onClick={props.click} className="AddTaskForm">
            <input
                type="text"
                placeholder={"Add new task"}
                value={props.currentTask}
                onChange = {props.change}
            />
            <button>Add</button>
        </form>
    );
};

export default AddTaskForm;