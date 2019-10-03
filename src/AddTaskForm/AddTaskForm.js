import React from 'react';

const AddTaskForm = props => {
    return (
        <form onSubmit={props.click} className="AddTaskForm">
            <input
                type="text"
                placeholder={"Add new task"}
                value={props.value}
                onChange = {props.change}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;