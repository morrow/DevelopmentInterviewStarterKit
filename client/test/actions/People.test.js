import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

import { receivePeople } from '../../src/actions/Actions'
import { fetchPeople } from '../../src/actions/AsyncActions'
import { RECEIVE_PEOPLE } from '../../src/actions/Constants'

describe('people actions', () => {

  let store

  beforeEach(() => {
    const mockStore = configureStore()
    store = mockStore({
      people:[]
    })
    store.clearActions();
  });

  describe('receivePeople', () => {
    test('Dispatches the receivePeople action and payload', () => {
      store.dispatch(receivePeople());
      expect(store.getActions()).toMatchSnapshot();
    });
  });

});

describe('async people actions', () => {

  let mockStore, mock_person

 beforeEach(()=>{
    const middlewares = [thunk]
    mockStore = configureMockStore(middlewares)
    mock_person = {
      name: 'test',
      title: 'test',
      email:'test@salesforce.com'
    }
  })

  afterEach(()=> {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('fetchPeople', ()=> {

    it('creates RECEIVE_PEOPLE after fetching people', () => {
      fetchMock.getOnce('/api/people.json', {
        body: [mock_person],
        headers: {
          'content-type': 'application/json'
        }
      })
      const expectedActions = [
        {
          type: RECEIVE_PEOPLE,
          people: [mock_person]
        },
      ]
      const store = mockStore({ people: [] })
      return store.dispatch(fetchPeople()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });


  });

});