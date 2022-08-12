import React from 'react'
import Pais from './Pais/Pais'
import './Paises.css'

export default function Paises() {
  return (
    <div className='row container borda justify-content-around'>
      <Pais nome='Brasil' bandeira='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/188px-Flag_of_Brazil.svg.png' />
      <Pais nome='Alemanha' bandeira='https://s5.static.brasilescola.uol.com.br/be/2020/10/bandeira-da-alemanha.jpg' />
    </div>
  )
}
