import React, { useState, useEffect } from "react";

//Fonc
import "react-toastify/dist/ReactToastify.css";

//API
import { createUser } from "../api/createUser";

//toastify
import { validate } from "./func/validate";
import { ToastContainer, toast } from "react-toastify";

import {
  Grid,
  Typography,
  Input,
  InputLabel,
  FormControl,
  Button,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

//Icons
import googleIcon from "../svg/icons8-google.svg";
import faceBookIcon from "../svg/icons8-facebook.svg";
import Styles from "../Styles/SignUp.module.css";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    mobuleNumber: "",
    email: "",
    password: "",
  });

  //show Password
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword((prve) => !prve);
  };

  const { name, moduleNumber, email, password } = data;

  //errorsHandlers
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  //validate data
  useEffect(() => {
    setErrors(validate(data));
  }, [data, focus]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.id]: true });
  };

  const submitHandler = async () => {
    if (!Object.keys(errors).length) {
      //sendData
      if (await createUser({ ...data })) {
        toast.success("You have successfully registered", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      //error
      setFocus({
        name: true,
        mobuleNumber: true,
        email: true,
        password: true,
      });
    }
  };

  return (
    <>
      {/* toastify */}
      <ToastContainer />
      {/* label head */}
      <div className={Styles.container}>
        <div className={Styles.labelContainer}>
          <div className={Styles.label}></div>
          <div className={Styles.labelBorder}></div>
        </div>
        <BsFillArrowLeftCircleFill className={Styles.backIcon} />
        <Grid container position="absolute" top={160} left={5}>
          <Grid item xs={12}>
            <Typography component="h4" variant="h5" fontWeight="bold">
              Sign up
            </Typography>
            <Typography
              component="p"
              variant="p"
              color="#aaaaaa"
              mt={3}
              fontWeight="bold"
            >
              Create an account here
            </Typography>
          </Grid>
          {/* inputs */}
          <Grid
            container
            display="flex"
            justifyContent="center"
            mx={1}
            mt={2}
            spacing={1}
          >
            {/* form name */}
            <Grid xs={12} item display="flex" justifyContent="center">
              <FormControl
                fullWidth
                sx={{ m: 1, width: "85%" }}
                variant="standard"
              >
                <InputLabel htmlFor="name">Create an account here</InputLabel>

                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => changeHandler(e)}
                  onFocus={(e) => focusHandler(e)}
                  error={errors.name && focus.name}
                  // Icon
                  startAdornment={
                    <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  }
                />
                {/* show error */}
                {errors.name && focus.name && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.name}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            {/*form moule number*/}
            <Grid xs={12} item display="flex" justifyContent="center">
              <FormControl
                fullWidth
                sx={{ m: 1, width: "85%" }}
                variant="standard"
              >
                <InputLabel htmlFor="mobule_number">Module Number</InputLabel>

                <Input
                  id="mobuleNumber"
                  type="text"
                  value={moduleNumber}
                  placeholder="+91 0123456789"
                  error={errors.mobuleNumber && focus.mobuleNumber}
                  onChange={(e) => changeHandler(e)}
                  onFocus={(e) => focusHandler(e)}
                  //Icon
                  startAdornment={
                    <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  }
                />
                {/* show error */}
                {errors.mobuleNumber && focus.mobuleNumber && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.mobuleNumber}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            {/* form email */}
            <Grid xs={12} item display="flex" justifyContent="center">
              <FormControl
                fullWidth
                sx={{ m: 1, width: "85%" }}
                variant="standard"
              >
                <InputLabel htmlFor="email">Email Address</InputLabel>

                <Input
                  id="email"
                  type="email"
                  value={email}
                  error={errors.email && focus.email}
                  onChange={(e) => changeHandler(e)}
                  onFocus={(e) => focusHandler(e)}
                  placeholder="ehsanKeyhani82@gmail.com"
                  //Icon
                  startAdornment={
                    <MarkunreadIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  }
                />
                {/* show error */}
                {errors.email && focus.email && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            {/*form password*/}
            <Grid xs={12} item display="flex" justifyContent="center">
              <FormControl
                fullWidth
                sx={{ m: 1, width: "85%" }}
                variant="standard"
              >
                <InputLabel htmlFor="password">Password</InputLabel>

                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  error={errors.password && focus.password}
                  onChange={(e) => changeHandler(e)}
                  onFocus={(e) => focusHandler(e)}
                  //Icon
                  startAdornment={
                    <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  }
                  //show password || hidenPassword
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => showPasswordHandler()}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* show error */}
                {errors.password && focus.password && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid xs={12} item display="flex" justifyContent="center">
              <Typography component="p" variant="p" mt={1}>
                By signing you agree with our terms of User
              </Typography>
            </Grid>
            {/* Submit */}
            <Grid xs={12} item mt={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  background: "#078282",
                  width: "90%",
                  borderRadius: "40px",
                  "&:hover": { background: "#11a1a1" },
                }}
                onClick={() => submitHandler()}
              >
                sign Up
              </Button>
            </Grid>
            <Grid xs={12} item mt={2} display="flex" justifyContent="center">
              <div className={Styles.OR}></div>
              <div className={Styles.redusOR}>
                <div>OR</div>
              </div>
            </Grid>
            {/* login gmail */}
            <Grid xs={12} item mt={4} display="flex" justifyContent="center">
              <div className={Styles.loginCart}>
                <div>
                  <span> Login With gmail</span>
                  <img src={googleIcon} />
                </div>
              </div>
            </Grid>
            <Grid xs={12} item mt={2} display="flex" justifyContent="center">
              <div className={Styles.loginCart}>
                <div>
                  <span> Login With Facebook</span>
                  <img src={faceBookIcon} />
                </div>
              </div>
            </Grid>
            <Grid xs={11} mt={3} item display="flex" justifyContent="center">
              <Typography component="p" variant="p" color="#aaaaaa">
                New member?ّ
                <Typography
                  component="span"
                  variant="span"
                  color="#078282"
                  fontWeight="bold"
                >
                  Sign Up
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Signup;
