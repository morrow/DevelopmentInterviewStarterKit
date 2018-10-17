import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchMe() {
  return dispatch => {
    return fetch('/api/me.json', creds)
      .then(response => response.json())
      .then(me => dispatch(actions.receiveMe(me)));
  }
}

export function fetchPeople() {
  return dispatch => {
    return fetch('/api/people.json', creds)
      .then(response => {
        if(response.status == 401){
          alert('No valid API credentials found. Please login or add to ENV and the restart server.')
        }
        return response.json()
      })
      .then(people => dispatch(actions.receivePeople(people)))
  }
}