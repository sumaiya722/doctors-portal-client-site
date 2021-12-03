import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError ,signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        // alert('Hello')
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location,history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField type="email" name="email" onChange={handleOnChange} sx={{width:"75%",m:1}} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField name="password" onChange={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic" type="password" label="Your Password" variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login
                        </Button>
                         <NavLink to="/register"
                        style={{textDecoration:'none'}}
                        >
                            <Button variant="text">New User ? Please Register</Button>
                        </NavLink>
                         {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!!</Alert>}
                    {authError && <Alert>{authError}</Alert>}
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Signin With Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;