import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchResult } from 'components/SearchResult/SearchResult';
import { HistorySearch } from 'components/HistorySearch/HistorySearch';

export const Home = () => {
  return (
    <>
      <SearchForm />
      <SearchResult />
      <HistorySearch />
    </>
  );
};
