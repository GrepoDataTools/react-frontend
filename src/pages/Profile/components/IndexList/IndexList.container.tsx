import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndexesStart } from '../../../../redux/user/user.reducer';
import { selectIndexList, selectStatus } from '../../../../redux/user/user.selector';
import IndexList from './IndexList';

const IndexListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const indexes = useSelector(selectIndexList);
  const { loading } = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchIndexesStart());
  }, [dispatch]);

  if (loading) return <>loading...</>;

  return <IndexList indexes={indexes} />;
};

export default IndexListContainer;
