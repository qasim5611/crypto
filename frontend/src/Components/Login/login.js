
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

import {  Switch, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { authuser } from "./../../redux/actions/authuser";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import "./../qasim.css";
import { FcElectricalSensor, FcDoNotInhale } from "react-icons/fc";

import history from "./../history/history";

const Login = () => {
  let dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [emailerr, setemailerr] = useState("");
  const [passerr, setpasserr] = useState("");

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
    const pass = values.password;
    console.log("pass", pass);

    const conpass = values.cpassword;
    console.log("conpass", conpass);

    let isvalid = true;
    // const isvalid = {
    //   isvalidbool: true,

    // };

    if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
      setpasserr("");
    } else if (pass == "") {
      isvalid = false;
      setpasserr("Password ShouldNot Be Empty");
      setemailerr("");
    } else {
      setemailerr("");
      setpasserr("");
    }

    return isvalid;
  };

  

  
  const [newtest, setNewtest] = useState('');

  const test = useSelector((state) => state.Auth.data.msg);


  
const notify = () =>
  toast.error(  test , {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });



  console.log("AllFormsData", test);


    useEffect(() => {
      setNewtest(test);
    if (test == "Password Not Correct") {
      toast.error( test , {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    else if(test == "NOT Verified, Check Mail, We Already Have Send you Email" ){
      toast.info(test, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    else if (test == "Login Successful") {
      toast.success(test, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }


else if (test == "Not available email") {
  toast.error(test, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}




    }, [test]); 


  // setNewtest(test);


  if (newtest == "Login Successful") {

   setNewtest("");

    setTimeout(() => {
      history.push("/articleupload");
    }, 3000);


  }

   else if (newtest == "NOT Verified, Check Mail, We Already Have Send you Email") {
     

     setNewtest('');
     setTimeout(() => {
       history.push("/verifyemail");
     }, 3000);

     
   }
   

  const notifyMsg = () => toast(<div> {newtest.msg}</div>);

  const [toastcall, settoastcall] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    
    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      dispatch(authuser(values))
    }

    

  };

//  const submitHandler = (e) => {
//    e.preventDefault();
//    var isFormvalid = validate();
//    console.log("isvalid", isFormvalid);
//    if (isFormvalid) {
//      dispatch(authuser(values))
//        .then((res) => {
//          toast.success(res.message, { position: toast.POSITION.TOP_CENTER });
//        })
//        .catch((error) => {
//          toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
//        });
//    }
//  };





  return (
    <div style={{ background: "#001317" }}>
      <br />
      <h3
        style={{
          fontFamily: "cursive",
          textAlign: "center",
          color: "#049c56",
          fontSize: "27px",
          marginTop: "70px",
        }}
      >
        {" "}
        SignIn Form
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
            {" "}
            <FormControl
              variant="outlined"
              style={{ marginBottom: "10px", width: "70%" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
            <center>
              <Link to="/Forgetpass" style={{ textDecoration: "none" }}>
                <p className="forgotpas">Forgott password</p>
              </Link>
            </center>
            <center>
              {passerr ? <div className="errmsg">{passerr}</div> : null}
            </center>
            <Button
              variant="contained"
              color="secondary"
              onClick={submitHandler}
            >
              Login
            </Button>
          </center>

          <center>
            {/* {newtest.msg && <div className="errmsg">{newtest.msg}</div> } */}

            {/* {test && <div className="errmsg">{test}</div>} */}

            {/* {test ?  BellMsg() : null } */}

            {/* {test ? (<div className="errmsg">{test}</div>) : (<div className="errmsg"></div>)} */}
          </center>
        </Grid>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
        <ToastContainer />
      </Grid>
    </div>
  );
};

export default Login;
