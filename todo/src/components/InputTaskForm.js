import React, { useState} from 'react';

function InputTaskForm ({addTask}) {

    const [task, setTask] = useState('')
    const handleSubmit = (event) => {
    event.preventDefault();
    setTask('')
    console.log("submitted: ", task)
    addTask(task);
    event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="taskName">What's the task?</label>
            <input
                type="text"
                name="taskName"
                placeholder="Name of task"
                id="taskName"
                onChange={e => setTask(e.target.value)}
                 />
            
            {/*<label htmlFor="taskDesc">More details</label>
            <input
                type="text"
                name="taskDesc"
                placeholder="Description of task (optional)"
                id="taskDesc"
                onChange={e => setTask({...task, desc: e.target.value})} />
            */}
            <button type="submit">Add task to list</button>

        </form>
    )
}

// const FormikTaskForm = withFormik({
//     mapPropsToValues({taskName, taskDesc, completed}) {
//         return {
//             taskName: taskName || '',
//             taskDesc: taskDesc || '',
//             completed: completed || false
//         };
//     },

//     validationSchema: Yup.object().shape({
//         taskName: Yup.string().required("Please enter the task to submit."),
//     }),

//     handleSubmit(values, { props, resetForm }) {
//         props.dispatch({ type: 'ADD_TASK', payload: values });
//         console.log(values);
//         resetForm();
//     }

// })(InputTaskForm);

// const AddTask = connect()(FormikTaskForm)

export default InputTaskForm;