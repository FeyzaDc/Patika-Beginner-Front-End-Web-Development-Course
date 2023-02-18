import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Todoapp() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <div className="todoapp">
      <Header addTodo={setTodos} todos={todos}/>
      <Main todoList={todos}/>
      <Footer />
    </div>
  );
}

export default Todoapp;
