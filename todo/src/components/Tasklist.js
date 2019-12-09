import React, { useReducer } from 'react';

//local imports
import InputTaskForm from './InputTaskForm';
import TaskCard from './TaskCard';

const fake = [1, 2, 3]

function Tasklist ({addTask, state, toggle, clear}) {
    return (
        <main>
            <InputTaskForm addTask={addTask}/>
            <button onClick={() => clear()}>Clear completed tasks</button>
            <ul>
              {state.list.map(a => <TaskCard key={Math.random()} toggle={toggle} task={a}/>)}
            </ul>
    
        </main>
    )
}

export default Tasklist;