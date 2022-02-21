import mailIcon from '../assets/icons/mail.svg'
import phoneIcon from '../assets/icons/phone.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import instagramIcon from '../assets/icons/instagram.svg'

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <ul>
        <li>
          <img src={mailIcon} alt="Mail" className='icon' />
          <h4>pabloscaramutti@gmail.com</h4>
        </li>
        <li>
          <img src={phoneIcon} alt="phone" className='icon' />
          <h4>+54 221 571-8024</h4>
        </li>
        <li>
          <img src={githubIcon} alt="Github" className='icon' />
          <h4>/pabloScaramutti</h4>
        </li>
        <li>
          <img src={linkedinIcon} alt="Linkedin" className='icon' />
          <h4>/in/pabloscaramutti/</h4>
        </li>
        <li>
          <img src={instagramIcon} alt="Instagram" className='icon' />
          <h4>/pabloscaramutti/</h4>
        </li>
      </ul>
    </>
  )
}
