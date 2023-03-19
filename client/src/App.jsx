import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <div className='bg-indigo-600 w-full h-screen'></div>
    </div>
  )
}

export default App
