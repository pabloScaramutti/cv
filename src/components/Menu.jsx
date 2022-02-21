import download from '../assets/PabloScaramutti-cv.png'
import downloadIcon from '../assets/icons/download.svg'
import sunIcon from '../assets/icons/sun.svg'
import moonIcon from '../assets/icons/moon.svg'
import mailIcon from '../assets/icons/mail-solid.svg'

const switchThemes = {
  dark: 'light',
  light: 'dark'
}

export default function Menu({ theme, setTheme }) {
  return (
    <nav className='menu-bar'>
      <button type="button">ES</button>
      <button type="button">EN</button>
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
