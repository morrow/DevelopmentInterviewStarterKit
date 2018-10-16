import React from 'react'
import styled from 'styled-components'

import { ConnectedNavBar } from '../containers/ConnectedNavBar'
import { PeopleContainer } from '../containers/PeopleContainer'


export const PeoplePage = () => (
  <div>
    <ConnectedNavBar />
    <main>
      <h1>People</h1>
      <PeopleContainer />
    </main>
  </div>
);
