/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';

import Todo from '../components/Todo';
import { TodoContext } from '../context/todoContext';

import type { ITodo, TodoContextType } from '../types/todo'

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  )
}

export default Todos
