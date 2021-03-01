import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Delete from '../components/Delete';

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
      <Delete id={id} />
      <hr />
      <Link to='/'>BAck to todos</Link>
    </div>
  );
};

export default ShowPage;
