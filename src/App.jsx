import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectorPaises from './SelectorPaises'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SelectorPaises />
    </>
  )
}

export default App
