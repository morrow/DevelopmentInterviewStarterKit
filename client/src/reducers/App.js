import { merge } from '../utils'
import * as actions from '../actions/Constants'

export const initial_state = {
    email_character_frequency_visible: false,
    possible_duplicates_visible: false,
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
    case actions.SHOW_POSSIBLE_DUPLICATES:
      return merge(state, { possible_duplicates_visible: true })
    case actions.HIDE_POSSIBLE_DUPLICATES:
      return merge(state, { possible_duplicates_visible: false })
    case actions.TOGGLE_POSSIBLE_DUPLICATES:
      return merge(state, { possible_duplicates_visible: !state.possible_duplicates_visible })
    default:
      return state
  }
}