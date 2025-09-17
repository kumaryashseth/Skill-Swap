import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const skills = [
  { id: 1, name: 'Learn Guitar', user: 'John Doe' },
  { id: 2, name: 'Baking Masterclass', user: 'Jane Smith' },
  { id: 3, name: 'Introduction to React', user: 'Peter Jones' },
];

const DashboardPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item key={skill.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Taught by: {skill.user}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
                <Button size="small">Request Swap</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;