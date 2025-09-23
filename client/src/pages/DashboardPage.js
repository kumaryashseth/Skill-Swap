import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import Api from '../Api';
import { useEffect } from 'react';
import { useState } from 'react';



const DashboardPage = () => {
  const [name,setName] = useState("");

useEffect(()=>{

    const user = async()=>{
         const token = localStorage.getItem("token")
         const res = await Api("/users/profile",{
          headers:{
            Authorization:`Bearer ${token}`
          }
         })
         console.log(res.data)
         setName(res.data.name)
  }
  user()

},[])

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Skills
      </Typography>
      <Grid container spacing={4}>
         <Typography> {name} </Typography>
        {/* {skills.map((skill) => (
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
        ))} */}
      </Grid>
    </Container>
  );
};

export default DashboardPage;