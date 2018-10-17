import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { ConnectedNavBar } from '../containers/ConnectedNavBar'


export const HomePage = () => (
  <div className='home'>
    <ConnectedNavBar />
    <main>
      <Link to='/people' className='button'>Click Here to Get Started</Link>
      <div className='social'>
        <h3>Thank you for your time!</h3>
        <a href='https://github.com/morrow/DevelopmentInterviewStarterKit' target='_blank'>Github</a>
        <a href='https://linkedin.com/in/tmorrow86' target='_blank'>LinkedIn</a>
        <a href='https://terrencemorrow.com' target='_blank'>Personal</a>
      </div>
    </main>
  </div>
);
