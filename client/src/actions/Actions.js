import * as actions from './Constants'

export function receiveMe(me) {
  return {
    type: actions.RECEIVE_ME,
    me
  }
}

export function receivePeople(people) {
  return {
    type: actions.RECEIVE_PEOPLE,
    people
  }
}

export function showEmailCharacterFrequency(){
  return {
    type: actions.SHOW_EMAIL_CHARACTER_FREQUENCY,
  }
}

export function hideEmailCharacterFrequency(){
  return {
    type: actions.HIDE_EMAIL_CHARACTER_FREQUENCY,
  }
}

export function toggleEmailCharacterFrequency(){
  return {
    type: actions.TOGGLE_EMAIL_CHARACTER_FREQUENCY,
  }
}

export function showPossibleDuplicates(){
  return {
    type: actions.SHOW_POSSIBLE_DUPLICATES,
  }
}

export function hidePossibleDuplicates(){
  return {
    type: actions.HIDE_POSSIBLE_DUPLICATES,
  }
}

export function togglePossibleDuplicates(){
  return {
    type: actions.TOGGLE_POSSIBLE_DUPLICATES,
  }
}