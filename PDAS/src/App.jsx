import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import 'bulma/css/bulma.css'

function App() {


  return (
    <div>
      <div>
        Personal Digital Assistants
      </div>
      <div >
        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
        <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
        <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
      </div>
    </div>
  )
}

export default App
