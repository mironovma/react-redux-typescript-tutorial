import { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypeSelector";

const TodoList: React.FunctionComponent = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useAction();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      {pages.map((p) => (
        <span
          onClick={() => setTodoPage(p)}
          key={p}
          style={{
            border: p === page ? "2px solid green" : "1px solid gray",
            padding: "10px",
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default TodoList;
