import React from 'react'
import styled from 'styled-components'
import { toggleEmailCharacterFrequency } from '../actions/Actions'
import EmailCharacterFrequencyContainer from '../containers/EmailCharacterFrequencyContainer'
import { ConnectedNavBar } from '../containers/ConnectedNavBar'
import { PeopleContainer } from '../containers/PeopleContainer'
import { ActionButtonContainer } from '../containers/ActionButtonContainer'


export const PeoplePage = ({app}) => {
  let button_text = app.email_character_frequency_visible ? 'Hide' : 'Show'
  return(
    <div>
      <ConnectedNavBar />
      <main>
        <h1>People</h1>
        <div className='email-character-frequency-wrap'>
          <ActionButtonContainer action={toggleEmailCharacterFrequency}>{button_text} e-mail character frequency</ActionButtonContainer>
          { app.email_character_frequency_visible &&
            <EmailCharacterFrequencyContainer />
          }
        </div>
        <PeopleContainer />
      </main>
    </div>
  )
}
