import React from 'react';

const Task = props => {
    return (
        <div className="Task">
            <p>{props.text}</p>
            <img src={props.image} width="20" height="20"/>
        </div>
    );
};

export default Task;