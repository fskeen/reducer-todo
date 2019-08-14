export const initialState = {
    list: [ {
        name: "testing",
        completed: false,
        id: Date.now()
    }]
}

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                list: [...state.list, {
                    name: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                list: state.list.map(task => {
                    if (task.id === action.payload) {
                        return {...task, completed: !task.completed}
                    } else {
                        return task;
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                list: state.list.filter(a => {
                    console.log(a)
                    return !a.completed
                })
            }
        default: 
            return state;
    }
}
// collect vals and add to list