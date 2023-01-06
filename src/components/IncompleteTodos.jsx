import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickCompleted, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Unfinished Todo</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickCompleted(index)}>Done</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
