import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './components/react.css'
import Bgchanger from './components/Bgchanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Bgchanger />
  )
}

export default App
