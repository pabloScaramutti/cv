import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Languages from './components/Languages'
import JobExperience from './components/JobExperience'
import Education from './components/Education'
import Menu from './components/Menu'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className="App" data-theme={theme}>
      <div className="main-container">
        <Menu theme={theme} setTheme={setTheme} />
        <Header />
        <p className="bio font-light">I’m 27 years old based in La Plata, Argentina. I’m searching new experiences to apply,
          develope my skills and learn from team work.
          <br />
          I love new challenges, finding solutions for problems and helping others to have a better life.
        </p>

        <div className="content">
          <div className="contact">
            <Contact />
            <Skills />
            <Languages />
          </div>
          <div className="curriculum">
            <JobExperience />
            <Education />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
