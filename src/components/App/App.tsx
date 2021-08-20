import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './Global.styled';
import Header from '../Layout/Header/Header';
import { Container } from './App.styled';
import ScoreboardContainer from '../../pages/Scoreboard/Scoreboard.container';
import HomeContainer from '../../pages/Home/Home.container';
import Footer from '../Layout/Footer/Footer';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import { history } from '../../utils/url.utils';

const App: React.FC = () => (
  <Router history={history}>
    <div>
      <GlobalStyle />
      <Header />
    </div>
    <Switch>
      <Route path="/" component={HomeContainer} exact />
      <Container>
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/scoreboard" component={ScoreboardContainer} exact />
        <Route path="/player/:market/:playerId" render={() => <div>d</div>} exact />
      </Container>
    </Switch>
    <Footer />
  </Router>
);

export default App;
