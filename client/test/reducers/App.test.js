import { app, initial_state } from '../../src/reducers/App'
import * as actions from '../../src/actions/Actions'

describe('app reducer', ()=>{

  it('should return initial state', ()=>{
    expect(app(undefined, {})).toEqual(initial_state)
  })

  it('should return correct state with SHOW_EMAIL_CHARACTER_FREQUENCY action', ()=> {
    // show email character frequency
    const state_a = app(initial_state, actions.showEmailCharacterFrequency())
    expect(state_a.email_character_frequency_visible).toEqual(true)
    // should still be visible if action is repeated
    const state_b = app(initial_state, actions.showEmailCharacterFrequency())
    expect(state_a.email_character_frequency_visible).toEqual(true)
  })

  it('should return correct state with HIDE_EMAIL_CHARACTER_FREQUENCY action', ()=> {
    // first show email character frequency
    const state_a = app(initial_state, actions.showEmailCharacterFrequency())
    expect(state_a.email_character_frequency_visible).toBe(true)
    // hide email character frequency
    const state_b = app(state_a, actions.hideEmailCharacterFrequency())
    expect(state_b.email_character_frequency_visible).toBe(false)
    // should still be hidden if action is repeated
    const state_c = app(state_b, actions.hideEmailCharacterFrequency())
    expect(state_c.email_character_frequency_visible).toBe(false)
  })

  it('should return correct state with TOGGLE_EMAIL_CHARACTER_FREQUENCY action', ()=> {
    // should toggle from false to true
    const state_a = app(initial_state, actions.toggleEmailCharacterFrequency())
    expect(state_a.email_character_frequency_visible).toBe(true)
    // should toggle from true to false
    const state_b = app(state_a, actions.toggleEmailCharacterFrequency())
    expect(state_b.email_character_frequency_visible).toBe(false)
    // should toggle back from false to true
    const state_c = app(state_b, actions.toggleEmailCharacterFrequency())
    expect(state_c.email_character_frequency_visible).toBe(true)
  })

})