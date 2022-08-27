import React from 'react'
import Pais from './Pais/Pais'
import './Paises.css'

export default function Paises(props) {
  return (
    <div className='row container borda justify-content-around'>
      {props.listaDePaises.map( (p, indice) => {
        return <Pais key={indice} nome={p.nome} bandeira={p.bandeira} />
      })}
    </div>
  )
}
