import React from 'react'
import css from './Filtro.css'

export default function Filtro() {
  return (
    <div className={css.divFiltro}>
      <input type='text' placeholder='Filtro'></input>
      <span>Países: </span>
      <span>População: </span>
    </div>
  )
}
