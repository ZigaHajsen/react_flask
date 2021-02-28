import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowPage = () => {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <div>
      {todo.length > 0 &&
        todo.map((data) => <div key={data.id}>{data.content}</div>)}
    </div>
  );
};

export default ShowPage;
