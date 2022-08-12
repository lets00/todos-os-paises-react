import React from 'react'
import Filtro from './components/filtro/Filtro'
import Titulo from './components/titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <main>
      <div className='container'>
        <Titulo />
        <Filtro />
      </div>
    </main>
  )
}

export default App
