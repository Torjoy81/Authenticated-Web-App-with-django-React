import React, { useState } from "react";
import {
  Paper,
  Typography,
  Avatar,
  Button,
  Grid,
  FormControl,
  InputLabel,
  FormGroup,
  Input,
  makeStyles
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBox from "@material-ui/icons/AccountBox";
import Lock from "@material-ui/icons/Lock";
import Mail from "@material-ui/icons/Mail";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "./../../action/authAction";


const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  margin: {
    marginTop: theme.spacing.unit
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginTop: theme.spacing.unit,
    width: 200
  },
  typography: {
    useNextVariants: true
  }
})) 



function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    username:"",
    email: "",
    password: "",
    re_password:''
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(values.password != values.re_password){
      console.log('Password is worng');
      
    }else{
      const newUser = {
        username:values.username,
        password:values.password,
        email:values.email
      };
      props.register(newUser)
    }
  };

  return (
    <React.Fragment>
      {
        props.isAuthenticated ? <Redirect path='/' />:<div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountBox />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Register
            </Typography>
            <form
              onSubmit={e => {
                handleSubmit(e);
              }}
            >
              <FormGroup className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <FormControl
                      required={true}
                      className={classes.textField}
                    >
                      <InputLabel htmlFor="userName">Name</InputLabel>
                      <Input
                        id="userName"
                        value={values.userName}
                        onChange={handleChange("username")}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <Mail />
                  </Grid>
                  <Grid item>
                    <FormControl
                      required={true}
                      className={classes.textField}
                    >
                      <InputLabel htmlFor="email">E-mail</InputLabel>
                      <Input
                        id="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        type="email"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <Lock />
                  </Grid>
                  <Grid item>
                    <FormControl
                      required={true}
                      className={classes.textField}
                      
                    >
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        id="password"
                        value={values.password}
                        onChange={handleChange("password")}
                        type="password"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <Lock />
                  </Grid>
                  <Grid item>
                    <FormControl
                      required={true}
                      className={classes.textField}
                    >
                      <InputLabel htmlFor="re-password">
                        Retype Password
                      </InputLabel>
                      <Input
                        id="re-password"
                        value={values.re_password}
                        onChange={handleChange("re_password")}
                        type="password"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </FormGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                SignUp
              </Button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </Paper>
        </main>
      </div>
      }
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{register})(SignUp);
