import './App.css'
import { Clients } from './components/Clients'
import { Hero } from './components/Hero'
import { Community } from './components/Community'
import { TextWImage } from './components/TextWImage'
import { Achievements } from './Achievements'

function App() {
  return (
    <>
      <Hero />
      <Clients />
      <Community />
      <TextWImage sectionNumber={1} img='/phone_showing.png' direction={false} title='The unseen of spending three years at Pixelgrade' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.' btnText='Learn More' />
      <Achievements />
    </>
  )
}

export default App
