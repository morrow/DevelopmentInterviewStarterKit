import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const EmailCharacterFrequency = ({data, columns}) => (

  <ReactTable
    className='email-character-frequency -striped'
    data={data}
    columns={columns}
    minRows={5}
  />

)

export default EmailCharacterFrequency

