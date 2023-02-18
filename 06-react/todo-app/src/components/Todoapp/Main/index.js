import React from "react";

function Main({ todoList }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      
      <ul className="todo-list">
        {todoList.map((item, i) => {
          return (
            <li key={i}>
              <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>{item.todoName}</label>
                <button className="destroy"></button>
              </div>
            </li>
          );
        })}
      </ul>
      
      {/* <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul> */}
    </section>
  );
}

export default Main;
