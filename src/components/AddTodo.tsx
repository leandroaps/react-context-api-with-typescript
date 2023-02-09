/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';

import { TodoContext } from '../context/todoContext';

import type { ITodo, TodoContextType } from '../types/todo'

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType
  const [formData, setFormData] = React.useState<ITodo | any>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault()
    saveTodo(formData)
  }

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        handleSaveTodo(e, formData)
      }}
    >
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input
            onChange={handleForm}
            type="text"
            id="title"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleForm}
            type="text"
            id="description"
            className="form-control"
          />
        </div>
      </div>
      <button disabled={formData === undefined}>Add Todo</button>
    </form>
  )
}

export default AddTodo
