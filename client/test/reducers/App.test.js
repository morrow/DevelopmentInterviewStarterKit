import { app, initial_state } from '../../src/reducers/App'
import * as actions from '../../src/actions/Actions'

describe('app reducer', ()=>{

  it('should return initial state', ()=>{
    expect(app(undefined, {})).toEqual(initial_state)
  })

  it('should return correct state with SHOW_EMAIL_CHARACTER_FREQUENCY action', ()=> {
    const expected_state = {
      email_character_frequency_visible: true
    }
    expect(app(initial_state, actions.showEmailCharacterFrequency())).toEqual(expected_state)
  })

  it('should return correct state with HIDE_EMAIL_CHARACTER_FREQUENCY action', ()=> {
    const expected_state = {
      email_character_frequency_visible: false
    }
    let new_state = app(initial_state, actions.showEmailCharacterFrequency())
    expect(new_state.email_character_frequency_visible).toBe(true)
    expect(app(new_state, actions.hideEmailCharacterFrequency())).toEqual(expected_state)
  })

  it('should return correct state with TOGGLE_EMAIL_CHARACTER_FREQUENCY action', ()=> {
    const expected_state_a = {
      email_character_frequency_visible: true
    }
    const expected_state_b = {
      email_character_frequency_visible: false
    }
    // should toggle from false to true
    const state_a = app(initial_state, actions.toggleEmailCharacterFrequency())
    expect(state_a).toEqual(expected_state_a)
    // should toggle from true to false
    const state_b = app(state_a, actions.toggleEmailCharacterFrequency())
    expect(state_b).toEqual(expected_state_b)
    // should toggle back from false to true
    const state_c = app(state_b, actions.toggleEmailCharacterFrequency())
    expect(state_c).toEqual(expected_state_a)
  })

})