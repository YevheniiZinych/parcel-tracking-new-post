import { useState } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchResult } from 'components/SearchResult/SearchResult';
import { HistorySearch } from 'components/HistorySearch/HistorySearch';
import { HomeContainer, SearchWrapper } from './Home.styled';

export const Home = () => {
  const [currentTtn, setCurrentTtn] = useState('');

  const getCurrentTtn = ttn => {
    setCurrentTtn(ttn);
  };

  return (
    <HomeContainer>
      <HistorySearch getCurrentTtn={getCurrentTtn} />
      <SearchWrapper>
        <SearchForm currentTtn={currentTtn} />
        <SearchResult />
      </SearchWrapper>
    </HomeContainer>
  );
};
