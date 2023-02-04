import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Todoapp() {
  const [todos, setTodos] = useState([
    {
      todoname: "Learn JavaScript",
    },
    {
      todoname: "Learn React",
    },
    {
      todoname: "Have a life!",
    },
  ]);

  return (
    <div className="todoapp">
      <Header/>
      <Main/>
      <Footer />
    </div>
  );
}

export default Todoapp;
