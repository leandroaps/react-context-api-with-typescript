import React from 'react';

import { ThemeContext } from '../context/themeContext';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Theme, ThemeContextType } from '../types/theme'

interface ThemeProps {
  children?: React.ReactNode
}

const ThemeWrapper: React.FC<ThemeProps> = ({ children }) => {
  const { theme, changeTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme)
  }
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select
        className="Theme-toggler"
        name="toggleTheme"
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  )
}

export default ThemeWrapper
