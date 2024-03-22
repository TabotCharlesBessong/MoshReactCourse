import useTodos from "../../hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="list-group">
      {todos?.slice(0,10)?.map((todo) => (
        <li key={todo.id} className="list-group-item mt-2">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
