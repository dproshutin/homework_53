import React from 'react';

const Task = props => {
    return (
        <div className="Task">
            <p>{props.text}</p>
            <img src={props.image} width="50px" height="50px"/>
        </div>
    );
};

export default Task;