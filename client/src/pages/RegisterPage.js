import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
 import Api from '../Api'; 


const RegisterPage = () => {
  const [form,setForm] = useState({
       name:"",
      email:"",
      password:"",
      gender:"",
  });


const register = async (e) => {
  e.preventDefault();

  try {
    const res = await Api.post("/auth/register", form); 
    console.log(res.data); 
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

}
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            autoComplete="given-name"
            name="name"
            onChange={(e)=> setForm({...form,name:e.target.value})}
            required
            fullWidth
            id="name"
            label="Full Name"
            autoFocus
          />
          <TextField
            margin="normal"
            name="email"
            onChange={(e)=> setForm({...form,email:e.target.value})}
            required
            fullWidth
            id="email"
            label="Email Address"

            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
             onChange={(e)=> setForm({...form,password:e.target.value})}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />

          <TextField
            margin="normal"
            required
            fullWidth
             onChange={(e)=> setForm({...form,gender:e.target.value})}
            name="gender"
            label="gender"
            type="gender"
            id="gender"
            autoComplete="new-gender"
          />
          <Button
            onClick={register}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );


export default RegisterPage;