import './TodoList.css'

function TodoList({ todos }) {
  return (
    <div className="todoList">
      <h2>TodoList</h2>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            {todo.title}
          </div>
        )
      })}
    </div>
  )
}

export default TodoList