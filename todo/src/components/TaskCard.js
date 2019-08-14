import React from 'react';

function TaskCard ({toggle, task}) {
    console.log(task)
    return (
        <li onClick={() => toggle(task.id)}>
        
            <p>{task.name}</p>
        </li>
    )
}

export default TaskCard;