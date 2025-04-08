// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from './assets/swiggy.svg';
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div >
      <img src = {logo} alt='Swiggy logo'style={{ height: 53, width: 36 }} />
      <h1 className='text-white text-[14px] font-semibold '>Swiggy</h1>
      </div>
    </>
  )
}

export default App
