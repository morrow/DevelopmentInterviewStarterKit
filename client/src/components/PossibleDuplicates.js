import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const PossibleDuplicates = ({data,columns}) => (
  <ReactTable
    className='possible-duplicates'
    data={data}
    columns={columns}
    minRows={5}
  />)

export default PossibleDuplicates

