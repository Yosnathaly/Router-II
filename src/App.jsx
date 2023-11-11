import { useState } from 'react'

import './App.css'

//importaciones
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Vistas
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Selector from './views/Selector'
//componentes
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Pokemones" element={<Selector />} />
          <Route path="/Pokemones/:name" element={<Pokemones />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
