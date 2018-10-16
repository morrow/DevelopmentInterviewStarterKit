import React from 'react'
import styled from 'styled-components'

const Person = ({data}) => (
  <div className='person'>
    <div className='name'>{data.name}</div>
    <div className='email'>
      <a href={['mailto:', data.email].join('')}>{data.email}</a>
    </div>
    <div className='title'>{data.title}</div>
  </div>
);

export default Person;