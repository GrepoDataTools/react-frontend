import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './Global.styled';
import Header from '../Layout/Header/Header';
import { Container } from './App.styled';
import ScoreboardContainer from '../../pages/Scoreboard/Scoreboard.container';
import HomeContainer from '../../pages/Home/Home.container';

const App: React.FC = () => (
  <Router>
    <div>
      <GlobalStyle />
      <Header />
    </div>
    <Switch>
      <Route path="/" component={HomeContainer} exact />
      <Container>
        <Route path="/scoreboard" component={ScoreboardContainer} exact />
        <Route path="/player/:market/:playerId" render={() => <div>d</div>} exact />
      </Container>
    </Switch>
  </Router>
);

export default App;
