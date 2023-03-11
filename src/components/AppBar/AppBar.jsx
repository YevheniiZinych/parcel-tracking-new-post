import { AppBar, Container, Toolbar } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from './AppBar.styled';

export const NavBar = () => {
  return (
    <AppBar position="absolute">
      <Container
        maxWidth="x1"
        sx={{
          backgroundColor: '#DC143C',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            gap: '10px',
            // color: 'yellow',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          <Logo></Logo>
          <header>
            <Navigation />
          </header>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
