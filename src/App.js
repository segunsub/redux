import TodoList from './components/TodoList'
import Input from './components/input'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
function App() {
  return (
    <div className="App">
        <h1> Todo List</h1>
        <TodoList/>
        <Input/>
       
    </div>
  );
}

export default App;
