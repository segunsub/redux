import React from 'react'
import { useDispatch} from 'react-redux'
import {updateTask,deleteTask} from '../actions'
import { Icon} from 'semantic-ui-react'

function Task({task}) {
    const dispatch = useDispatch()
    const deleteTasks = (e) => {
        dispatch(deleteTask(task.id))
    }
    function updateTasks (e) {
        dispatch(updateTask(task.id))
     }
    return (
        <div className="eachTask">
            {task.completed ? 
            <>
            <span className="spanDiv">
                <input  type="checkbox" id={task.id} defaultChecked onClick={updateTasks}/>
                <label htmlFor={task.id}><s>{task.todo}</s></label>
            </span>
            <span>
                    <Icon name='delete' onClick={deleteTasks}/>
                </span>
            </>
               :
               <>
               <span className="spanDiv">
               <input  type="checkbox" id={task.id} onClick={updateTasks}/>
               <label htmlFor={task.id}>{task.todo}</label>
               </span>
               <span>
                    <Icon name='delete' onClick={deleteTasks}/>
                </span>
               </>}
        </div>
    )
}

export default Task
