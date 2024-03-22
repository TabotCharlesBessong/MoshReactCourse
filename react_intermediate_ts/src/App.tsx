import { PostList, TodoForm, TodoList } from "./components"

const App = () => {
  return (
    <div className="container m-4" >
      <TodoForm />
      <TodoList />
      <PostList />
    </div>
  )
}

export default App