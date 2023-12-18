import React from 'react'

const Cell = ({value}) => {
  return (
    <button className='cell'>{value}</button>
  )
}

export default Cell