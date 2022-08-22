import React, { useState } from 'react'
import Filtro from './components/filtro/Filtro'
import Titulo from './components/titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Paises from './components/paises/Paises'

function App() {
  const [filtroValue, setFiltroValue] = useState('')

  function handleFiltroValue(value) {
    setFiltroValue(value)
  }

  return (
    <main>
      <div className='container'>
        <Titulo />
        <Filtro onChangeFiltroValue={handleFiltroValue}/>
        <Paises />
        <p>{filtroValue}</p>
      </div>
    </main>
  )
}

export default App
