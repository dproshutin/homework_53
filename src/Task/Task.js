import React from 'react';

const Task = props => {
    return (
        <div className="Task">
            <p>{props.text}</p>
            <img onClick={props.remove} src={props.image} width="50px" height="50px" alt={props.alt}/>
        </div>
    );
};

export default Task;