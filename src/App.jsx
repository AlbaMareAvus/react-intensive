import './App.css'
import HelloForm from './HelloForm'
import TodoList from './TodoList'

function App() {
  const todos = [
    {
      "id": 1,
      "title": "delectus aut autem",
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
    },
    {
      "id": 4,
      "title": "et porro tempora",
    }
  ]
  return (
    <>
      <HelloForm/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
