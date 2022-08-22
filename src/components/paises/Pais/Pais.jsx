import React from 'react'
import './Pais.css'

export default function Pais(props) {
  return (
      <div className='col-7 col-lg-3 borda pais'>
        <img className='bandeira' src={props.bandeira}></img>
        <span>{props.nome ? props.nome : 'País'}</span>
      </div>
  )
}
