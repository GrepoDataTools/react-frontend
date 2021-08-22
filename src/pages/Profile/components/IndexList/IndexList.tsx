import React from 'react';
import { Index } from '../../../../types/Indexer';

interface IndexListProps {
  indexes: Array<Index>;
}

const IndexList: React.FC<IndexListProps> = ({ indexes }) => {
  return (
    <>
      <h1>indexes</h1>
      <span>{indexes.map((index: any) => index.name)}</span>
    </>
  );
};

export default IndexList;
