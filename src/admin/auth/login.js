import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { dataLogin } from "../../utils/globals";
//import { loginUser } from "../../store/actions/users";

// const mapStateToProps = (state) => {
//   return {
//     user: state.userReducer.user,
//     isLogin: state.userReducer.isLogin,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (data) => dispatch(loginUser(data)),
//   };
// };

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const { user, isLogin } = props;

  const classes = useStyles();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    // props.login({
    //   username,
    //   password,
    // });

    try {
      const request = await axios.post("http://localhost:4000/users/login", {
        username,
        password,
      });

      if (request.data.isLogin) {
        //toast.success(request.data.message, {position: toast.POSITION.TOP_CENTER});
        window.localStorage.setItem(
          "dataLogin",
          JSON.stringify(request.data.data)
        );

        setTimeout(function () {
          window.location.href = "/imcoolmaster/dashboard";
        }, 3000);
      } else {
        //toast.error(request.data.message, {position: toast.POSITION.TOP_CENTER});
        alert(request.data.message);
      }
    } catch (err) {
      return err.response.data.message;
    }
  };

  return (
    <>
      {dataLogin && dataLogin.user.role === "admin" ? (
        <Redirect to="/imcoolmaster/dashboard" />
      ) : (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={(e) => onSubmitLogin(e)}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="username"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};
//export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
export default AdminLogin;
