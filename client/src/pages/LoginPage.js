import { React, useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Api from "../Api";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();
    console.log(form)
    try {
      const res = await Api.post("/auth/login", form);
      console.log(res);
      const token = res.data.token
      localStorage.setItem("token",token)
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }
  

  return (
    <>
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=> setForm({...form,email:e.target.value})}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=> setForm({...form,password:e.target.value})}

          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={login}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
 </> );
};

export default LoginPage;
