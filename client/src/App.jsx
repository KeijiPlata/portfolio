import { useState } from 'react'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Nav from './components/Nav'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Introduction />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default App
