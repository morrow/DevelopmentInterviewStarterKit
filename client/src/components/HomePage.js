import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { ConnectedNavBar } from '../containers/ConnectedNavBar'


export const HomePage = () => (
  <div className='home'>
    <ConnectedNavBar />
    <main>
      <Link to='/people'>People</Link>
    </main>
  </div>
);
