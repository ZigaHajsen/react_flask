import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const TodoPage = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setTodo(data));
  }, []);

  return (
    <div>
      <Card listOfTodos={todo} />
    </div>
  );
};

export default TodoPage;
