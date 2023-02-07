import { useState, useEffect } from "react";

const initialFormValues = { todoName: "" };

function Header({}) {
  const [todo, setTodo] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setTodo({ [e.target.name]: e.target.value });
  };

  const onSumbitForm = (e) => {
    e.preventDefault();

    if (todo.todoName === "") {
      return false;
    }
  };

  return (
    <>
      <h1>todos</h1>
      <form onSubmit={onSumbitForm}>
        <input
          className="new-todo"
          autoFocus
          name="todoName"
          placeholder="What needs to be done?"
          value={todo.name}
          onChange={onChangeInput}
        />
      </form>
    </>
  );
}

export default Header;
