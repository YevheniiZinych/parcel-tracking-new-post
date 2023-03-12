import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Home } from 'Pages/Home/Home';
import { PostOffice } from 'Pages/PostOffice/PostOffice';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="office" element={<PostOffice />} />
        </Route>
      </Routes>
    </div>
  );
};
