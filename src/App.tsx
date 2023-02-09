/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './styles.css';

import * as React from 'react';

import AddTodo from './components/AddTodo';
import ThemeWrapper from './components/ThemeWrapper';
import Todos from './containers/Todos';
import ThemeProvider from './context/themeContext';
import TodoProvider from './context/todoContext';

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className="App">
            <h1>My Todos</h1>
            <AddTodo />
            <Todos />
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App
