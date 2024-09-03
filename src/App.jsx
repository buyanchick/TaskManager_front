import { React, useEffect, useState } from "react";
import "./App.css";
import TodoTable from "./app/components/TodoTable";
import TodoService from "./app/services/TodoService";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const responce = await TodoService.getTasks();
    setTodos(responce);
  }

  return (
    <>
      <strong>Task Manager</strong>
      <TodoTable props={{ todos }} />
    </>
  );
}

export default App;
