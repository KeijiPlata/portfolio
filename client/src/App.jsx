import { useState } from 'react'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import LatestProject from './components/LatestProjects'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Introduction />
      <AboutMe />
      <Skills />
      <LatestProject />
      <Footer />
    </div>
  )
}

export default App
