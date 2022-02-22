import download from '../assets/PabloScaramutti-cv.png'
import downloadIcon from '../assets/icons/download.svg'
import sunIcon from '../assets/icons/sun.svg'
import moonIcon from '../assets/icons/moon.svg'
import mailIcon from '../assets/icons/mail-solid.svg'

import { useTranslation } from 'react-i18next'

const switchThemes = {
  dark: 'light',
  light: 'dark'
}

export default function Menu({ theme, setTheme }) {
  const { i18n } = useTranslation()
  return (
    <nav className='menu-bar'>
      {i18n.language === 'en' ?
        <button type="button" onClick={() => i18n.changeLanguage('es')}>ES</button>
        : <button type="button" onClick={() => i18n.changeLanguage('en')}>EN</button>
      }
      <button
        type='button'
        onClick={() => setTheme(switchThemes[theme])}
        title="Change theme"
      >
        {theme == 'dark' ? <img src={sunIcon} className="icon" /> : <img src={moonIcon} className="icon" width="18px" height="18px" />}
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
