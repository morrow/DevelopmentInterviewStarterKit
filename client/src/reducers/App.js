import { merge } from '../utils'
import * as actions from '../actions/Constants'

export const initial_state = {
    email_character_frequency_visible: false,
}

export function app(
  state=initial_state,
  action
) {
  switch(action.type) {
    case actions.SHOW_EMAIL_CHARACTER_FREQUENCY:
      return merge(state, { email_character_frequency_visible: true })
    case actions.HIDE_EMAIL_CHARACTER_FREQUENCY:
      return merge(state, { email_character_frequency_visible: false })
    case actions.TOGGLE_EMAIL_CHARACTER_FREQUENCY:
      return merge(state, { email_character_frequency_visible: !state.email_character_frequency_visible })
    default:
      return state
  }
}