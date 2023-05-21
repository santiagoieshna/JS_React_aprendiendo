import { useState } from 'react'
import './App.css'
import { MyRoutes } from './routers/routes'

function App() {
  
  return (
    <>
    <main>
      <header>
        <h1 className='title'>🎬 Peliculas</h1>
      </header>
     <MyRoutes/> 
    </main>
    </>
  )
}

export default App
