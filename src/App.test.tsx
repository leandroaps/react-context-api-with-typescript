import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders My Todos', () => {
  render(<App />)
  const linkElement = screen.getByText(/My Todos/i)
  expect(linkElement).toBeInTheDocument()
})
