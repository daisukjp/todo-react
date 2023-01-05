import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["Hello", "Hello"]);
  const [completeTodos, setCompleteTodos] = useState(["Hello?"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="Add TODO" />
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p class="title">Unfinished Todo</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button>Done</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p class="title">Completed Tasks</p>
        <ul id="complete-list">
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <p>{todo}</p>
                <button>Bring back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
