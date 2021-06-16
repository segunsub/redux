

export const addTodo = (todo) => {
    return {
        type: 'ADDTODO',
        payload: todo
    }
}


export const updateTask = (id) => {
    return {
        type: 'UPDATE',
        payload: id
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}