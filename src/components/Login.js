import React, {useState} from 'react';
import {
Button,
TextField,
Grid,
Paper,
Typography,
} from "@material-ui/core";

import {useSelector, useDispatch} from 'react-redux';
import {alterLogin} from '../redux/actions/loginActions.js';
import {useHistory} from 'react-router-dom';

function Login(){



const [username,setUsername]=useState("")
const [password,setPassword]=useState("")

const isLoggedIn = useSelector((state) => state.login.isLoggedin);
console.log(isLoggedIn);
const dispatch = useDispatch();
const history = useHistory();

function handleSubmit(){
    console.log(isLoggedIn)
    if (username === localStorage.getItem('email') && password === localStorage.getItem('password')) {
    dispatch(alterLogin());
    history.push("/main");
    console.log(isLoggedIn)
} else {
alert('Incorrect Credentials!');
}
}
return (
<div>

    <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
        <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
            >
            <Paper
            variant="elevation"
            elevation={2}
            className="login-background"
            >
            <Grid item>
            <Typography component="h1" variant="h5">
            Login
            </Typography>
        </Grid>
        <Grid item>
        <form onSubmit={handleSubmit}>
        {/* <form onSubmit={() => dispatch(alterLogin())}> */}
        <Grid container direction="column" spacing={2}>
        <Grid item>
        <TextField
        type="email"
        placeholder="Email"
        fullWidth
        name="username"
        variant="outlined"
        value={username}
        onChange={(username) => setUsername(username.target.value)}
        required
        autoFocus
        />
        </Grid>
        <Grid item>
        <TextField
        type="password"
        placeholder="Password"
        fullWidth
        name="password"
        variant="outlined"
        value={password}
        onChange={(password) => setPassword(password.target.value)}
        required
        />
        </Grid>
        <Grid item>
        <Button
        variant="contained"
        color="primary"
        type="submit"
        className="button-block"
        >
        Submit
        </Button>
        </Grid>
        </Grid>
        </form>
        </Grid>
    <Grid item>

    </Grid>
    </Paper>
    </Grid>
    </Grid>
    </Grid>
</div>
);
}
export default Login;