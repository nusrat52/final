import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
 
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
 import { signUpdate } from "../../actions/actions";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const yasil = "rgb(0, 158, 127)";
const tundyasil = "rgb(4, 119, 96)";
const useStyles = makeStyles((theme) => ({
  grHeight: {
    height: "90px",
  },
  file: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "0 !important",
    height: "80px",
  },
  error: {
    color: "red",
  },
  paper: {
    marginTop: theme.spacing(15),
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
  yasil: {
    backgroundColor: yasil,
    color: "white",
    fontWeight: "700",
    fontSize: "15px",
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      backgroundColor: tundyasil,
    },
  },
  liYasil: {
    color: yasil,
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
    cursor: "pointer",
  },
  container: {
    marginLeft: "350px",
    ["@media (max-width:1000px)"]: {
     
     marginLeft:"0"
     
    }
  },
  hd: {
    alignItems:"flex-start",
    justifyContent:"space-between"
  }

}));
const Tf = withStyles(() => ({
  root: {
    "& label.Mui-focused": {
      color: yasil,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: yasil,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: yasil,
      },
    },
  },
}))(TextField);
const Containerka = withStyles(() => ({
  root: {
    backgroundColor: "white",
  },
}))(Container);
export default function SignIn({handleClose}) {
  const classes = useStyles();
  const [sIn, setsIn] = useState(true);
  const [sekil, setSekil] = useState("bos");
  const [fileReader, setReader] = useState("Select Photo");
  const dispatch = useDispatch();
  const logged = useSelector(state => state.login.authen)

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
       password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(5, "must be at least 5 characters")
        .required("Required"),
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(1, "must be at least 1 characters")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(4, "Must be at least 4 characters ")
        .required("Required"),
     }),
    onSubmit: (values) => {
      //   console.log(values);
      dispatch(signUpdate({ ...values, sekil: sekil }));
    },
  });

  

    return (<Box className={classes.container}>
      <Containerka  component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Want to cutomize Your Profile?
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Tf
                  autoComplete="fname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className={classes.error}>{formik.errors.username}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tf
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={classes.error}>{formik.errors.firstName}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tf
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className={classes.error}>{formik.errors.lastName}</div>
                ) : null}
              </Grid>
             
              <Grid item xs={12}>
                <Tf
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={classes.error}>{formik.errors.password}</div>
                ) : null}
              </Grid>
              <Grid
                display="flex"
          
                className={classes.grHeight+" " +classes.hd}
                item
                xs={12}
              >

                <input
                  type="file"
                  onChange={(e) => {
                      
                
                    console.log(e.currentTarget.files[0]);
                    setSekil(e.currentTarget.files[0]);
                  }}
                />

              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.yasil}
              onClick={(e) => {}}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
          
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Containerka>
      </Box>
    );
  
}
