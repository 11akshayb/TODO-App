import React from "react";
import {
Button,
TextField,
Grid,
Paper,
Typography,
} from "@material-ui/core";

class Signup extends React.Component {
constructor(props) {
super(props);
this.state = { username: "", password:"", email:""};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
this.setState({ username: event.state.username, password: event.state.password , email:event.state.email});
}
handleSubmit(event) {

localStorage.setItem("email", this.state.email);
localStorage.setItem("username", this.state.username);
localStorage.setItem("password", this.state.password);
localStorage.removeItem("todos");
this.props.history.push("/login");

}
render() {
return (
<div>
<Grid container spacing={0} justify="center" direction="row">
    <Grid item>
        <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="signup-form"
            >
            <Paper
            variant="elevation"
            elevation={2}
            className="signup-background"
            >
            <Grid item>
            <Typography component="h1" variant="h5">
            Sign-up
            </Typography>
        </Grid>
        <Grid item>
            <form onSubmit={this.handleSubmit}>
            <Grid container direction="column" spacing={2}>

            <Grid item>
                <TextField
                type="username"
                placeholder="Username"
                fullWidth
                name="username"
                variant="outlined"
                value={this.state.username}
                onChange={(event) =>
                this.setState({
                [event.target.name]: event.target.value,
                })
                }
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
                value={this.state.password}
                onChange={(event) =>
                this.setState({
                [event.target.name]: event.target.value,
                })
                }
                required
                />
                </Grid>
                <Grid item>
                <TextField type="email" placeholder="Email" fullWidth name="email" variant="outlined" value={this.state.email}
                onChange={(event) =>
                this.setState({
                [event.target.name]: event.target.value,
                })
                }
                required
                autoFocus
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
}
export default Signup;