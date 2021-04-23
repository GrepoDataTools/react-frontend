import React, { useEffect } from 'react';
import { getServerListStart } from '../../redux/global/global.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/reducer';
import App from './App';

const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state: State) => state.global.activeWorldsList);

  useEffect(() => {
    dispatch(getServerListStart());
  }, [dispatch]);

  if (!data && status.loading) return <div>loading...</div>;

  return <App />;
};

export default AppContainer;
