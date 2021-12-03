
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';
import login from '../../../images/login.png';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser,isLoading ,authError} = useAuth();
    const handleOnChange = e => {
        
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name ,history);
        e.preventDefault();
    }
    return (
     <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading&&<form onSubmit={handleLoginSubmit}>
                        <TextField name="name" onChange={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Name" variant="standard" />
                         <TextField name="email" type="email" onChange={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Email" variant="standard" />
                        <TextField name="password" onChange={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic" type="password"
                            label="Your Password" variant="standard" />
                        <TextField name="password2" onChange={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic" type="password" label="Retype Your Password" variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Register
                        </Button>
                         <NavLink to="/login"
                        style={{textDecoration:'none'}}
                        >
                            <Button variant="text">Already Register ? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!!</Alert>}
                    {authError && <Alert>{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;