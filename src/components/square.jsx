import React from 'react'

const square = ({value,onSquareClick}) => {
  return (
    <div>
      <button className='square' onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default square
