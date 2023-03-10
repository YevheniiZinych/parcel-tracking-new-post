import { useState } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchResult } from 'components/SearchResult/SearchResult';
import { HistorySearch } from 'components/HistorySearch/HistorySearch';

export const Home = () => {
  const [currentTtn, setCurrentTtn] = useState(null);

  const getCurrentTtn = ttn => {
    setCurrentTtn(ttn);
  };

  return (
    <>
      <SearchForm currentTtn={currentTtn} />
      <SearchResult />
      <HistorySearch getCurrentTtn={getCurrentTtn} />
    </>
  );
};
