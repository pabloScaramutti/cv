import { useEffect, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Languages from './components/Languages'
import JobExperience from './components/JobExperience'
import Education from './components/Education'
import Menu from './components/Menu'


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'dark')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lang = localStorage.getItem("lang")
    if (lang)
      i18n.changeLanguage(lang)
  }, [])


  return (
    <div className="App" data-theme={theme}>
      <div className="main-container">
        <Menu actualTheme={theme} setTheme={setTheme} />
        <Header />
        <p className="bio font-light">
          <Trans>bio</Trans>
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
