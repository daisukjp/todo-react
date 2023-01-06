import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Completed Tasks</p>
      <ul id="complete-list">
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>Bring back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
