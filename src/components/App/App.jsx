// import { useEffect } from 'react';
// import { getCurrentTracking } from 'redux/TrackingSlice/operation';
// import { useDispatch } from 'react-redux';

// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'Pages/Home/Home';
import { PostOffice } from 'Pages/PostOffice/PostOffice';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="office" element={<PostOffice />} />
      </Route>
    </Routes>
  );
};
