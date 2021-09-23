import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index';
import Survey from './pages/Survey/index'
import Results from './pages/Results/index'
import Profile from './pages/Profile/index'
import Freelances from './pages/Freelances/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error/index'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider  } from './utils/context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <SurveyProvider>
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
      <Route 
        path="/profile/:id"
        render={(props) => <Profile {...props} />}
      />
      <Route path="*">
        <Error />
      </Route>
      </Switch>
      <Footer />
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
