import React from 'react'

export default function Filtro() {
  return (
    <div className='row'>
      <div className='col-12 col-lg-9'>
        <input type='text' className='form-control' placeholder='Filtro'></input>
      </div>
      <div className='col-12 col-lg-1'>
        <span className='form-label'>Países: 999</span>
      </div>
      <div className='col-12 col-lg-2'>
        <span className='form-label'>População: 9.999.999</span>
      </div>
    </div>
  )
}
