const TodoList = (state = [], action) => {
    switch(action.type) {
        case 'ADDTODO':
            return [...state,action.payload];
        case 'UPDATE':
           const task = state.map(each => {
              if(action.payload === each.id) {
                  each.completed = !each.completed
              }
              return each
            })
            return task;
        case 'DELETE':
            const taskDel = state.filter(task => action.payload !== task.id)  
            return taskDel
        default:
            return state
    }
}
export default TodoList