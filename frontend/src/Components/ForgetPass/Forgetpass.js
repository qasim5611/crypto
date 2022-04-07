
import React, { useState, useEffect } from "react";

import { Route, Redirect } from "react-router-dom";


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

import { forgotpass, clearstate } from "./../../redux/actions/authuser";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import "./../qasim.css";
import { FcElectricalSensor } from "react-icons/fc";

import history from "./../history/history";

const Forgetpass = () => {
  let dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
  
  });

  const [emailerr, setemailerr] = useState("");

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
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(values.email);
    console.log("isemailVer", isemailVer);

    // const passw = /^[A-Za-z]\w{7,14}$/;

    let isvalid = true;
    // const isvalid = {
    //   isvalidbool: true,

    // };

    if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
     
    
    } 
    else {
      setemailerr("");
    
    }

    return isvalid;
  };

  const notify = () => toast("You have been Signup Successfully");


  
  const [newtest, setNewtest] = useState(false);

  

  const EmailMsg = useSelector((state) => state.Auth.ForgPassMsg);

  console.log("AllFormsData", EmailMsg);


useEffect(() => {
  setNewtest(EmailMsg);
}, [EmailMsg]); 



  // setNewtest(test);


  if (newtest == "Cool Email Found, Redirecting to Change Password") {

   
    setTimeout(() => {
       
setNewtest(false);
      // dispatch(clearstate());setNewtest

      history.push("/VerifyTockenMail");
    }, 2000);

   

  } 

   

  const notifyMsg = () => toast(<div> {newtest.msg}</div>);

  const [toastcall, settoastcall] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    //  dispatch(signupdata(values));
    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      dispatch(forgotpass(values));
      //  notify();
    }

    // notifyMsg();
    //  settoastcall(newtest.msg);
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
        Plz Enter Your Email For Password Recovery!
      </h3>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} md={6} style={{ backgroundColor: "#fff7f9" }}>
          <center>
            {" "}
            <TextField
              style={{ marginBottom: "10px", width: "70%" }}
              id="outlined-secondary"
              label="Your Email Address"
              variant="outlined"
              color="secondary"
              name="email"
              onChange={handleChange("email")}
            />
          </center>
          <center>
            {emailerr ? <div className="errmsg">{emailerr}</div> : null}
          </center>

          <center>
            <Button
              variant="contained"
              color="secondary"
              onClick={submitHandler}
            >
              Recover
            </Button>
          </center>

          <center>
            {/* {newtest.msg && <div className="errmsg">{newtest.msg}</div> } */}

            {newtest && <div className="errmsg">{newtest}</div>}

            {/* {newtest == true ? (<div className="errmsg">{newtest}</div>) :  setNewtest(false)  } */}
          </center>
        </Grid>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Forgetpass;
