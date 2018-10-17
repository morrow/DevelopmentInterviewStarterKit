import React from 'react'

const ActionButton = ({onClick, children}) => (
  <button onClick={onClick} className='button'>{children}</button>
)

export default ActionButton