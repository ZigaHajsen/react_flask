import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';

const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setTodo(data));
  }, [addTodo]);

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue);
    console.log(addTodo);
  };

  const handleFormSubmit = () => {
    fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content: addTodo,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((mess) => {
        console.log(mess);
        setAddTodo('');
      });
  };

  return (
    <div>
      <Form
        userInput={addTodo}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Card listOfTodos={todo} />
    </div>
  );
};

export default TodoPage;
