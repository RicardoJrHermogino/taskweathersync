import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 
import { Container, Button, Grid, TextField, Typography, CssBaseline, Alert  } from "@mui/material";
import NotRegNavbar from "../components/not_reg_navbar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check if email and password are provided
    if (!email || !password) {
      setError('Please provide both email and password');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (email === 'user@example.com' && password === 'password') {
      console.log("Login successful");
      router.push('/dashboard'); 
    } else {
      setError('Invalid email or password');
    }


    
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  return (
    <>
      <NotRegNavbar/>
      <CssBaseline/>
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
            <Typography variant="h4" align="center" style={{ marginTop: '100px' }}>Login your account</Typography>
            <Typography sx={{ fontSize: 'small' }}>
              {`Don't have an account? `}
              <Link href="/signup">Register here.</Link>
            </Typography>
          </Grid>
          <Grid item xs={10}>
          {error && <Alert severity="error" sx={{ mb: 2, justifyContent: 'center' }}>{error}</Alert>}
          </Grid>
          <Grid item xs={10}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{height: "55px", borderRadius: "12px", bgcolor: "black", color: "white"}}>
              Login
            </Button>
          </Grid>
        </Grid>
        
      </Container>
    </>
  );
}
