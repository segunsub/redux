import './input.css'
import {useState} from 'react'
import { useDispatch} from 'react-redux'
import {addTodo} from '../actions'
import { Form,Input,Button} from 'semantic-ui-react'

function Inputs() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    // const todos = useSelector(state => state.Todo) 
    const addTodos = (e) => {
        e.preventDefault()
        dispatch(addTodo({
            todo: input,
            completed: false,
            id: new Date(),
        }))
        setInput('')
    }
   
    return (
        <Form onSubmit={addTodos}>
            <Input  icon='tasks' iconPosition='left' type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Add Task...' required/>
            <Button> Add!</Button>
        </Form>
    )
}

export default Inputs
