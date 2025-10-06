import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>

      <div>
        <a href="#" className="sm:hover:border-b">Home</a>
        <a href="#services" className="sm:hover:border-b">Services</a>
        <a href="#our-work" className="sm:hover:border-b">Our Work</a>
      </div>
      App
    </div>
  )
}

export default App