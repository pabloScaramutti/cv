import picture from '../assets/yo.jpg'

export default function Header() {
  return (
    <header className="profile-container">
      <img src={picture} className="profile-picture" />
      <div className="title">
        <h1>Scaramutti Pablo Martin</h1>
        <p className="font-light">Multimedia Designer / Front-end Web Developer</p>
      </div>
    </header>
  )
}
