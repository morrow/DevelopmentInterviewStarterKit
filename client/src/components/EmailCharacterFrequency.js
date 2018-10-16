import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const EmailCharacterFrequency = ({data, columns}) => (

  <ReactTable
    className='email-character-frequency'
    data={data}
    columns={columns}
  />

)

export default EmailCharacterFrequency

