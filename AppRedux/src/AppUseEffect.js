import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function AppUseEffect() {

  const [type, setType] = useState('albums');
  const [data, setData] = useState([''])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(result => setData(result.map(item => <li>{item.title}</li>)))
  }, [type])
  return (
    <div>
      <h1>Resurs: {type}</h1>
      <button onClick={() => setType('albums')}>Albums</button>

      <button onClick={() => setType('todos')}>ToDo</button>

      <button onClick={() => setType('posts')}>Posts</button>
      <div>
        {data}
      </div>
    </div>
  )
}

export default AppUseEffect;
