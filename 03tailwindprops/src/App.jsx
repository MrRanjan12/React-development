import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "RanjanKumar",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>tailwind Test</h1>
      <Card username = "Chai aur React" price = "$35"/>
      <Card username = "chai aur code" price = "$78"/>
    </>
  )
}

export default App
