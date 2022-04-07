import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import { VerifyTokenForPass } from "../../redux/actions/authuser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../qasim.css";

import history from "./../history/history";


const VerifyTockenMail = () => {
  let dispatch = useDispatch();

  const [values, setValues] = useState({ token: "" });

  const [tokenerr, settokenerr] = useState("");
  // const [passerr, setpasserr] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    let isvalid = true;

    console.log("values.token", values.token);

    if (values.token == "") {
      isvalid = false;
      settokenerr("Token Should not  be Empty!");
    } else {
    }

    return isvalid;
  };

  const notify = () => toast("You have been Signup Successfully");

  

    

  const email = useSelector((state) => state.Auth.ForgPassMsgMail);
  console.log("UserMailForVerify", email);

  const tknmsg = useSelector((state) => state.Auth.TokenMsg);
  console.log("tknmsg", tknmsg);

  // const ErrMsg = useSelector((state) => state.Auth.ErrMsg);
  // console.log("UserMailForVerify", ErrMsg);

  const TokenMsgPassUpdate = useSelector((state) => state.Auth.TokenMsgPassUpdate);
    console.log("TokenMsgPassUpdate", TokenMsgPassUpdate);

    if(TokenMsgPassUpdate == "You Have Been Verified for Password Update. Redirecting..."){
       setTimeout(() => {
         history.push("/Newpass");
       }, 3000);

    }



  const submitHandler = (e) => {
    e.preventDefault();

    //  dispatch(signupdata(values));
    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      let obj = {
        email: email,
        values: values,
      };

      // store.dispatch({ type: "HIDE_NOTIFICATION" });
      dispatch(VerifyTokenForPass(obj));
    }
  };

  return (
    <div>
      <br />
      <h3
        style={{
          fontFamily: "cursive",
          textAlign: "center",
          color: "#049c56",
          fontSize: "27px",
        }}
      >
        {" "}
        Please Enter Recovery Code From Email!
      </h3>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} md={6} style={{ backgroundColor: "#fff7f9" }}>
          <center>
            {" "}
            <FormControl
              variant="outlined"
              style={{ marginBottom: "10px", width: "70%" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                write code
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("token")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <br />
          </center>
          <center>
            {tokenerr ? <div className="errmsg">{tokenerr}</div> : null}
          </center>
          <br />

          <center>
            <Button
              variant="contained"
              color="secondary"
              onClick={submitHandler}
            >
              Verify Me
            </Button>
          </center>
          <br />

          <center>
            {TokenMsgPassUpdate ? (
              <div className="errmsg">{TokenMsgPassUpdate}</div>
            ) : null}
          </center>
        </Grid>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
};

export default VerifyTockenMail;
