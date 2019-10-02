import React from 'react';

const AddTaskForm = props => {
    return (
        <form className="AddTaskForm">
            <input
                type="text"
                placeholder={"Add new task"}
                value={props.currentTask}
                onChange = {props.change}
            />
            <button onClick={props.click}>Add</button>
        </form>
    );
};

export default AddTaskForm;