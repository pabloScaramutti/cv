import { useTranslation, Trans } from 'react-i18next'

import htmlIcon from '../assets/icons/html-5.svg'
import cssIcon from '../assets/icons/css3.svg'
import jsIcon from '../assets/icons/javascript.svg'
import reactIcon from '../assets/icons/react.svg'
import vueIcon from '../assets/icons/vuejs.svg'
import nextIcon from '../assets/icons/next-js.svg'
import gitIcon from '../assets/icons/icons8-git-96.png'
import storybookIcon from '../assets/icons/icons8-storybook.svg'
import jestIcon from '../assets/icons/jest-icon.png'
import apolloIcon from '../assets/icons/icons8-apollo.svg'
import graphQlIcon from '../assets/icons/icons8-graphql.svg'

import illustratorIcon from '../assets/icons/adobe-illustrator.svg'
import lightroomIcon from '../assets/icons/adobe-lightroom.svg'
import photoshopIcon from '../assets/icons/adobe-photoshop.svg'
import afterEffectsIcon from '../assets/icons/adobe-after-effects.svg'
import premiereIcon from '../assets/icons/adobe-premiere-pro.svg'

const tools = [
  {
    name: 'HTML',
    icon: htmlIcon
  },
  {
    name: 'CSS',
    icon: cssIcon
  },
  {
    name: 'Javascript',
    icon: jsIcon
  },
  {
    name: 'React',
    icon: reactIcon
  },
  {
    name: 'NextJs',
    icon: nextIcon
  },
  {
    name: 'Vuejs',
    icon: vueIcon
  },
  {
    name: 'React Native',
    icon: reactIcon
  },
  {
    name: 'GraphQl',
    icon: graphQlIcon
  },
  {
    name: 'Apollo Client',
    icon: apolloIcon
  },
  {
    name: 'Jest',
    icon: jestIcon
  },
  {
    name: 'Storybook',
    icon: storybookIcon
  },
  {
    name: 'Git',
    icon: gitIcon
  },
]

const visual = [
  {
    name: 'Illustrator',
    icon: illustratorIcon
  },
  {
    name: 'Lightroom',
    icon: lightroomIcon
  },
  {
    name: 'AfterEffects',
    icon: afterEffectsIcon
  },
  {
    name: 'PremirePro',
    icon: premiereIcon
  },
  {
    name: 'Photoshop',
    icon: photoshopIcon
  }
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <div >
      <h1>
        <Trans>
          toolbox
        </Trans>
      </h1>
      <div className='skills-container'>
        <div>
          <h2>IT</h2>
          <ul className='skill-list'>
            {tools.map(e =>
              <li key={e.name}>
                <img src={e.icon} className="icon" />
                <p>{e.name}</p>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Visual</h2>
          <ul className='skill-list'>
            {visual.map(e =>
              <li key={e.name}>
                <img src={e.icon} className="icon"></img>
                <p>{e.name}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
