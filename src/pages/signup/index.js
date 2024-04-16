import { useState } from 'react';
import { Container, Grid, Typography, Link, TextField, Button, CssBaseline, MenuItem, Select, FormControl, InputLabel, Alert } from "@mui/material";
import NotRegNavbar from "../components/not_reg_navbar";
import { useRouter } from 'next/router';
import Image from "next/image";

export default function SignUp() {
  
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workType, setWorkType] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!firstName || !lastName || !workType || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
  
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    // dini mangyayari na If intiro na validations sa input napass, proceed with signup logic

    // Additional signup logic...
    // dini ang logic san pag sign-up, for example, sending data to backend or JSON server
    router.push('/login');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const initialWorkTypes = ['Agriculture Industry', 'Fishing Industry', 'Construction Industry', 'Energy Industry', 'Shipping and Maritime Industry', 'Tourism Industry'];

  return (
    <>
      <NotRegNavbar />
      <CssBaseline />
      <Container maxWidth="large" >
        <Grid container spacing={2}>
          <Grid container spacing={2} justifyContent="center" alignItems="center" item xs={12} md={6}  >
            <Grid item md={7} xs={10}>
              <Typography variant="h4" align="center" style={{ marginTop: '40px' }}>Register</Typography>
              <Typography variant="body2" align="center">
                Already have an account? <Link href="/login">Login here.</Link>
              </Typography>
            </Grid>
            <Grid item md={7} xs={10}>
              {error && <Alert severity="error" fullWidth>{error}</Alert>}
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <FormControl fullWidth required>
                <InputLabel id="work-type-label">Industry Sector</InputLabel>
                <Select
                  labelId="work-type-label"
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                >
                  {initialWorkTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                error={!!error}
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                required
                error={password !== confirmPassword}
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <Button 
                variant="contained" 
                fullWidth 
                onClick={handleSignUp} 
                sx={{
                  height: "55px",
                  borderRadius: "12px",
                  bgcolor: "black",
                  color: "white", // Text color
                }}
              > 
                Sign Up
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" item xs={6} sx={{ display: { xs: 'none', sm: 'Grid' } }}>
            <Image src="/3d-weather-icons/SVGgraphics/welcomedesign.svg" alt="sample" width={1200} height={500} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
