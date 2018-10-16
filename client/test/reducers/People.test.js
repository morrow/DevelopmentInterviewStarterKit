import { people } from '../../src/reducers/People'
import { RECEIVE_PEOPLE } from '../../src/actions/Constants'

const initial_state = {}

describe('people reducer', ()=>{

  it('should return initial state', ()=>{
    expect(people(undefined, {})).toEqual(initial_state)
  })

  it('should return new state with RECEIVE_PEOPLE action', ()=> {
    const mock_people_state = {'0': 'test'}
    expect(people(initial_state, {
      type: RECEIVE_PEOPLE,
      people: mock_people_state
    }, initial_state)).toEqual(mock_people_state)
  })

})