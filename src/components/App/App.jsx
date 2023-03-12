import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Div } from './App.styled';

const Home = lazy(() => import('../../Pages/Home/Home'));
const PostOffice = lazy(() => import('../../Pages/PostOffice/PostOffice'));

export const App = () => {
  return (
    <Div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="office" element={<PostOffice />} />
        </Route>
      </Routes>
    </Div>
  );
};
