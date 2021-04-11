import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './Global.styled';
import Header from '../Layout/Header/Header';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import ScoreboardContainer from '../../pages/Scoreboard/Scoreboard.container';
import { State } from '../../redux/reducer';
import { getServerListStart } from '../../redux/global/global.reducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state: State) => state.global.activeWorldsList);

  useEffect(() => {
    dispatch(getServerListStart());
  }, [dispatch]);

  if (!data && status.loading) return <div>loading...</div>;

  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />
      </div>
      <Container>
        <Switch>
          <Route path="/scoreboard" component={ScoreboardContainer} exact />
          <Route path="/player/:market/:playerId" render={() => <div>d</div>} exact />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
