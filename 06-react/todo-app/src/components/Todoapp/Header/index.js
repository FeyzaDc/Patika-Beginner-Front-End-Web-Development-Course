import { useState, useEffect } from "react";

const initial = { todoName: "" }

function Header({ addTodo, todos }) {
  const [form, setForm] = useState(initial);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSumbitForm = (e) => {
    e.preventDefault();

    if (form.todoName === "") {
      return false;
    }

    addTodo([...todos, form])
    setForm(initial)
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
          value={form.todoName}
          onChange={onChangeInput}
        />
      </form>
    </>
  );
}

export default Header;
