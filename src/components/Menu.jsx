import download from '../assets/PabloScaramutti-cv.pdf'
import downloadIcon from '../assets/icons/download.svg'
import sunIcon from '../assets/icons/sun.svg'
import moonIcon from '../assets/icons/moon.svg'
import mailIcon from '../assets/icons/mail-solid.svg'

import { useTranslation } from 'react-i18next'

const switchThemes = {
  dark: 'light',
  light: 'dark'
}

export default function Menu({ actualTheme, setTheme }) {
  const { i18n } = useTranslation()

  function changeTheme() {
    localStorage.setItem('theme', switchThemes[actualTheme])
    setTheme(switchThemes[actualTheme])
  }

  function changeLanguage(lang) {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <nav className='menu-bar'>
      {i18n.language === 'en' ?
        <button type="button" onClick={() => changeLanguage('es')} title="Ver en epañol">ES</button>
        : <button type="button" onClick={() => changeLanguage('en')} title="Read in english">EN</button>
      }
      <button
        type='button'
        onClick={() => changeTheme()}
        title="Change theme"
      >
        {actualTheme == 'dark' ? <img src={sunIcon} className="icon" /> : <img src={moonIcon} className="icon" width="18px" height="18px" />}
      </button>
      <a href="mailto:pabloscaramutti@gmail.com">
        <img src={mailIcon} alt="mail-icon" title="Send me an email" className='icon' />
      </a>
      <a href={download} download>
        <img src={downloadIcon} alt="download-icon" title="Download PDF" className='icon' />
      </a>
    </nav>
  )
}
