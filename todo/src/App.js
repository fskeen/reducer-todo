import React, { useReducer } from 'react';
import './App.css';
import { initialState, taskReducer } from './reducers/taskReducer'

//local imports
import Header from './components/Header'
import Tasklist from './components/Tasklist'



function App() {

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) => {
    if (task)
    return dispatch({ type: 'ADD_TASK', payload: task})
  }

  const toggle = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id
    })
  }

  const clear = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <Header />
      <Tasklist addTask={addTask} state={state} dispatch={dispatch} toggle={toggle} clear={clear} />
    </div>
  );
}

export default App;
