import React from 'react'

const ActionButton = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

export default ActionButton