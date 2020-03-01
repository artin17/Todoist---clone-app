import React, { useState } from 'react';
import { Header } from '../src/components/layout/Header'
import { Content } from '../src/components/layout/Content'
import { ProjectsProvider, SelectedProjectProvider } from './context/context'


export const App = ({ darkModeDefault = false }) => {

  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (

    <SelectedProjectProvider>
      <ProjectsProvider>

        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}>

          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>

      </ProjectsProvider>
    </SelectedProjectProvider>
  )

}


