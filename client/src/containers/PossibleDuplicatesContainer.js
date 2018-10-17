import React from 'react'
import PossibleDuplicates from '../components/PossibleDuplicates'
import { connect } from 'react-redux'
import { getPossibleDuplicates } from '../utils'

const mapStateToProps = state => ({
  data: getPossibleDuplicates(state.people),
  columns: [
    {
      Header: 'Person A',
      accessor: 'person_a',
      Cell: row => (
        <div className='person' style={{margin:0}}>
          <div className='name'>{row.value.name}</div>
          <div className='email'>{row.value.email}</div>
          <div className='title'>{row.value.title}</div>
        </div>
      ),
      minWidth: 250,
    },
    {
      Header: 'Person B',
      accessor: 'person_b',
      Cell: row => (
        <div className='person' style={{margin:0}}>
          <div className='name'>{row.value.name}</div>
          <div className='email'>{row.value.email}</div>
          <div className='title'>{row.value.title}</div>
        </div>
      ),
      minWidth: 250,
    },
    {
      Header: 'Difference',
      accessor: 'score',
      Cell: row => (
        <div className='score'>{Math.round(row.value * 100)/100}</div>
      )
    }
  ]
});

export const PossibleDuplicatesContainer = connect(
  mapStateToProps
)(PossibleDuplicates);

export default PossibleDuplicatesContainer
