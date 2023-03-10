import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <div>LOGO</div>
        <nav>
          <NavLink to="/" end>
            Tracking Parcel
          </NavLink>
          <NavLink to="/office">Post Office</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
