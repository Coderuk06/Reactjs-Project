import React from 'react'
import './Titel.css'

const Titel = ({subtitel , titel}) => {
  return (
    <div className='titel'>
      <p>{subtitel}</p>
      <h2>{titel}</h2>
    </div>
  )
}

export default Titel
