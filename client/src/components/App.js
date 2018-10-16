import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LandingPage } from './LandingPage'
import { PeoplePageContainer } from '../containers/PeoplePageContainer'

const theme = {
  main: {
    colors: {
      medium: '#403075',
      light: '#887CAF',
      medium_light: '#615192',
      medium_dark: '#261758',
      dark: '#13073A',
    }
  }
};

const App = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/people" component={PeoplePageContainer}/>
          <Route exact path="/introduction" component={LandingPage}/>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App
