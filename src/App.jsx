import { About } from './components/about/about'
import { Contact } from './components/contact/contact'
import { Header } from './components/header/header'
import { Projects } from './components/projects/projects'
import { Skills } from './components/skills/skills'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
