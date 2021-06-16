import {useSelector} from 'react-redux'
import Task from './Task'

function TodoList() {
    const todos = useSelector(state => state.Todo) 
    return (
        <div className="allTask">
            {
                todos.map(eachTodo => {
                    return <Task key={eachTodo.id} task={eachTodo}/>
                })
            }
        </div>
    )
}

export default TodoList
