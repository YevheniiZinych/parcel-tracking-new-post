import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Navigation = () => {
  const theme = useTheme();
  return (
    <nav>
      <Box
        sx={{
          display: { xs: '1', md: 'flex' },
          gap: '10px',
          alignContent: 'stretch',
        }}
      >
        <NavLink to="/" end>
          <Typography
            sx={{
              backgroundColor: 'white',
              my: 2,
              color: 'black',
              display: 'block',
              padding: '5px',
              borderRadius: '3px',
              transition: theme.transitions.create([
                'background-color',
                'transform',
              ]),
              '&:hover': {
                backgroundColor: 'grey',
                color: 'white',
              },
            }}
          >
            Перевірити ТТН
          </Typography>
        </NavLink>

        <NavLink to="/office">
          <Typography
            sx={{
              backgroundColor: 'white',
              my: 2,
              color: 'black',
              display: 'block',
              padding: '5px',
              borderRadius: '3px',
              transition: theme.transitions.create([
                'background-color',
                'transform',
              ]),
              '&:hover': {
                backgroundColor: 'grey',
                color: 'white',
              },
            }}
          >
            Список відділень
          </Typography>
        </NavLink>
      </Box>
    </nav>
  );
};
