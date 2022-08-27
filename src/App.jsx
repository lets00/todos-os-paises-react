import React, { useState } from 'react'
import Filtro from './components/filtro/Filtro'
import Titulo from './components/titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Paises from './components/paises/Paises'
import { useEffect } from 'react'

function App() {
  const [filtroValue, setFiltroValue] = useState('')
  const [paises, setPaises] = useState([])

  useEffect(() => {    
    const coletaDados = async () => {
      const data = await fetch('https://restcountries.com/v3.1/all')
      const dataJson = await data.json()
      const paisesNomeEBandeira = dataJson.map(pais => { return {'nome': pais.translations.por.common.toLowerCase(), 'bandeira': pais.flags.png }} )
      setPaises(paisesNomeEBandeira)
    }

    coletaDados().catch((err) => console.log(`erro: ${err}`))
  }, [])

  function handleFiltroValue(value) {
    setFiltroValue(value)
  }

  return (
    <main>
      <div className='container'>
        <Titulo />
        <Filtro onChangeFiltroValue={handleFiltroValue}/>
        <Paises listaDePaises={paises.filter( pais => pais.nome.includes(filtroValue.toLowerCase())) }/>
      </div>
    </main>
  )
}

export default App
