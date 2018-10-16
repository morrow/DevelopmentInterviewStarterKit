import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { app } from './App'
import { me } from './Me'
import { people } from './People'

const Reducers = combineReducers({
  router: routerReducer,
  app,
  me,
  people
});

export default Reducers