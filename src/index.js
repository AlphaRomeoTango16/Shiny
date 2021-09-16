import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index';
import Survey from './pages/Survey/index'
import Results from './pages/Results/index'
import Freelances from './pages/Freelances/index'
import Header from './components/Header/index'
import Error from './components/Error/index'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  div {
      font-family: 'Trebuchet Ms', Helvetica, sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/survey/:questionNumber">
        <Survey />
      </Route>
      <Route path="/results/">
        <Results />
      </Route>
      <Route path="/freelances">
        <Freelances />
      </Route>
      <Route>
        <Error />
      </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
