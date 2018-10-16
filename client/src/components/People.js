import React from 'react'
import Person from './Person'

export const People = ({people}) => (
  <div className='people'>
    { Object.keys(people).map(i=>(
      <Person key={people[i].email} data={people[i]} />)
      )
    }
  </div>
)