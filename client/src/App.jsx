import { useState } from 'react'
import Introduction from './components/Introduction'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Introduction />
    </>
  )
}

export default App
