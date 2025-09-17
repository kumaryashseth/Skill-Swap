import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Skill Swap
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        The platform where you can exchange skills with people from all over the world. Learn something new, teach something you love.
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Button variant="contained" component={Link} to="/register">
            Get Started
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" component={Link} to="/login">
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FirstPage;