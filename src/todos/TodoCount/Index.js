import React from 'react';
import './TodoCount.css';
import { TodoContext } from '../../TodoContext/Index';

function TodoCount() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
    <h1 className='TodoCount'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export {TodoCount}