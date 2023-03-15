import { Nav } from './NotFound.styled';

const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 60 }}>404</b>
      <p>Page is no found</p>
      <Nav to="/">Back to HOME page</Nav>
    </main>
  );
};

export default NotFound;
