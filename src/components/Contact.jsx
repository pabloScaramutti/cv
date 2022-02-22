import mailIcon from '../assets/icons/mail.svg'
import phoneIcon from '../assets/icons/phone.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import instagramIcon from '../assets/icons/instagram.svg'

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li>
          <a href="mailto:pabloscaramutti@gmail.com">
            <img src={mailIcon} alt="Mail" className='icon' />
            <h4>pabloscaramutti@gmail.com</h4>
          </a>
        </li>
        <li>
          <a href="tel:+5492215718024">
            <img src={phoneIcon} alt="phone" className='icon' />
            <h4>+54 221 571-8024</h4>
          </a>
        </li>
        <li>
          <a href="https://github.com/pabloScaramutti" target="_blank">
            <img src={githubIcon} alt="Github" className='icon' />
            <h4>/pabloScaramutti</h4>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pabloscaramutti/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin" className='icon' />
            <h4>/in/pabloscaramutti/</h4>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pabloscaramutti/" target="_blank">
            <img src={instagramIcon} alt="Instagram" className='icon' />
            <h4>/pabloscaramutti/</h4>
          </a>
        </li>
      </ul>
    </div>
  )
}
