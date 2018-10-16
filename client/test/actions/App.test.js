import configureStore from 'redux-mock-store'
import configureMockStore from 'redux-mock-store'

import * as actions from '../../src/actions/Actions'
import * as constants from '../../src/actions/Constants'

describe('app actions', () => {

  let store

  beforeEach(() => {
    const mockStore = configureStore()
    store = mockStore({
      app:[]
    })
    store.clearActions();
  });

  describe('showEmailCharacterFrequency', () => {

    test('Dispatches the showEmailCharacterFrequency action', () => {
      store.dispatch(actions.showEmailCharacterFrequency());
      expect(store.getActions()).toMatchSnapshot();
    });

  });

  describe('hideEmailCharacterFrequency', () => {

    test('Dispatches the hideEmailCharacterFrequency action', () => {
      store.dispatch(actions.hideEmailCharacterFrequency());
      expect(store.getActions()).toMatchSnapshot();
    });

  });

  describe('toggleEmailCharacterFrequency', () => {

    test('Dispatches the toggleEmailCharacterFrequency action', () => {
      store.dispatch(actions.toggleEmailCharacterFrequency());
      expect(store.getActions()).toMatchSnapshot();
    });

  });


});