import ApiIcon from '@mui/icons-material/Api';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

const Home = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 4, mb: 4 }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ApiIcon fontSize="large" />
        <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
          Coding Contributions
        </Typography>
        <Link underline="hover" href="/api/github?username=ethanneff">
          api/github
        </Link>
        <Link underline="hover" href="/api/leetcode?username=ethanneff">
          api/leetcode
        </Link>
        <Link underline="hover" href="/api/hackerrank?username=ethanneff">
          api/hackerrank
        </Link>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 4 }}
      >
        Copyright ©{' '}
        <Link
          color="inherit"
          underline="hover"
          href="https://github.com/ethanneff/coding-contributions-api"
        >
          Ethan Neff
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};
export default Home;
