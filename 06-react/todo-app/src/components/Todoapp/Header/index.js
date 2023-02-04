import { useState, useEffect } from "react";

const initialFormValues = { todoname: "" };

function Header() {
  
  return (
    <header className="header">
      <h1>todos</h1>
      <form >
        <input
          className="new-todo"
          autoFocus
          name="todoname"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
}

export default Header;