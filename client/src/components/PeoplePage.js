import React from 'react'
import styled from 'styled-components'
import { toggleEmailCharacterFrequency, togglePossibleDuplicates } from '../actions/Actions'
import EmailCharacterFrequencyContainer from '../containers/EmailCharacterFrequencyContainer'
import PossibleDuplicatesContainer from '../containers/PossibleDuplicatesContainer'
import { ConnectedNavBar } from '../containers/ConnectedNavBar'
import { PeopleContainer } from '../containers/PeopleContainer'
import { ActionButtonContainer } from '../containers/ActionButtonContainer'


export const PeoplePage = ({app}) => {
  const getShowHideText = (bool)=> bool ? 'Hide' : 'Show'
  return(
    <div>
      <ConnectedNavBar />
      <main>
        <h1>People</h1>
        <div className='email-character-frequency-wrap'>
          <ActionButtonContainer action={toggleEmailCharacterFrequency}>
            {getShowHideText(app.email_character_frequency_visible)} e-mail character frequency
          </ActionButtonContainer>
          { app.email_character_frequency_visible &&
            <EmailCharacterFrequencyContainer />
          }
        </div>
        <div className='possible-duplicates-wrap'>
          <ActionButtonContainer action={togglePossibleDuplicates}>
            {getShowHideText(app.possible_duplicates_visible)} possible duplicates
          </ActionButtonContainer>
          { app.possible_duplicates_visible &&
            <PossibleDuplicatesContainer />
          }
        </div>
        <PeopleContainer />
      </main>
    </div>
  )
}
