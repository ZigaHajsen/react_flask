import React from 'react';

const Card = ({ listOfTodos }) => {
  return (
    <div>
      {listOfTodos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.content}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Card;
