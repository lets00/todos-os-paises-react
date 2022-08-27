import React, { useState } from 'react'

export default function Filtro(props) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value)
    props.onChangeFiltroValue(event.target.value)
  }

  return (
    <div className='row'>
      <div className='col-12 col-lg-9'>
        <input type='text' value={inputValue} onChange={handleInputChange} className='form-control' placeholder='Filtro' />
      </div>
      <div className='col-12 col-lg-1'>
        <span className='form-label'>Países: {props.totalDePaises}</span>
      </div>
      <div className='col-12 col-lg-2'>
        <span className='form-label'>População: {props.populacaoTotal}</span>
      </div>
    </div>
  )
}
