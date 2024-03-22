import { TodoForm, TodoList } from "./components"

const App = () => {
  return (
    <div className="container m-4" >
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App