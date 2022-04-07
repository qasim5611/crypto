import React, { useState , useEffect} from "react";

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
import Visibilityc from "@material-ui/icons/Visibility";
import VisibilityOffc from "@material-ui/icons/VisibilityOff";


import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import history from "./../history/history";


import Button from "@material-ui/core/Button";

import {signupdata} from './../../redux/actions/authuser';

import validator from "validator";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import { form, control, button } from "react-validation";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import './../qasim.css';
import { SignalCellularNullOutlined } from "@material-ui/icons";

const Signup = () => {
  let dispatch = useDispatch();

  // const [state, setState] = useState({ name: null, phone: null, image: null });

  

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    isVerified: false,
  });

  // const [valueserr, setValueserr] = useState({ nameerr: "", emailerr: "", passworderr: "" });

  const [nameerr, setnameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passerr, setpasserr] = useState("");


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };




// const [msg, setMsg] = useState(false);

const msg = useSelector((state) => state.Auth.ErrMsg);
console.log("Qasim is", msg);



if (msg) {
  if (msg == "You Are Already Registerd and Verified, Just hit on SignIn") {
    setTimeout(() => {
      history.push("/login");
    }, 5000);
  } else if (msg == "Email verification code send.") {
    setTimeout(() => {
      history.push("/verifyemail");
    }, 5000);
  } else if (
    msg ==
    "Email is already registred.  Check YOUR MAIL.. You just need to Verify Your Account..."
  ) {
    setTimeout(() => {
      history.push("/verifyemail");
    }, 5000);
  } 
  

  
}



// setmsg(test);


// const notify = () => toast(<div>{test}</div>);

// useEffect(() => {
//   notify();
// }, 
// [msg]);


  

  // const AllFormsData = useSelector((state) => state.FormReducer.DBFormdata);
  // console.log("AllFormsData", AllFormsData);




const validate = () => {
  const re =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  
 if (values.name.length < 3 || values.name.length > 30 || values.name.length == 0) {
   isvalid = false;
    setnameerr("Username needs to be 3 to 30 characters long");
    setemailerr("");
    setpasserr("");
 } 

  else if (!isemailVer) {
    isvalid = false;
    setemailerr("Your Email is not Correct!");
    setpasserr("");
    setnameerr("");
  }
   
  
  else if (pass !== conpass || pass.length == 0  || conpass.length == 0) {
    isvalid = false;
    setpasserr("Password is not Match/Correct");
    setemailerr("");
    setnameerr("");
  }
   else {
    setnameerr("");
    setemailerr("");
    setpasserr("");
  }

  return isvalid;

};


  const submit = (e) => {
    e.preventDefault();
   
    //  dispatch(signupdata(values));
    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
   
if (isFormvalid) {
  dispatch(signupdata(values));

//   if (test == true){
//  notify();
//   }

  
}

  
}

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPasswordc = () => {
    setValues({ ...values, showPasswordc: !values.showPasswordc });
  };

  const handleMouseDownPasswordc = (event) => {
    event.preventDefault();
  };


  return (
    <div style={{ background: "#001317" }}>
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
        Signup Form
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
              label="Your Name"
              variant="outlined"
              color="secondary"
              value={values.name}
              onChange={handleChange("name")}
              // validations={[required, vusername]}
            />
          </center>

          <center>
            {" "}
            {nameerr ? <div className="errmsg">{nameerr}</div> : null}
          </center>

          <center>
            {" "}
            <TextField
              style={{ marginBottom: "10px", width: "70%" }}
              id="outlined-secondary"
              label="Your Email Address"
              variant="outlined"
              color="secondary"
              onChange={handleChange("email")}
              value={values.email}
              // validations={[required, validEmail]}
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
            {/* ////////////////////////////////////////////////////////////////////////////////////// */}
            <FormControl
              variant="outlined"
              style={{ marginBottom: "10px", width: "70%" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="standard-adornment-passwordc"
                type={values.showPasswordc ? "text" : "password"}
                value={values.passwordc}
                onChange={handleChange("cpassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordc}
                      onMouseDown={handleMouseDownPasswordc}
                    >
                      {values.showPasswordc ? (
                        <Visibilityc />
                      ) : (
                        <VisibilityOffc />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* </FormControl> */}
            <br />
            {passerr ? <div className="errmsg">{passerr}</div> : null}
            <Button variant="contained" color="tertiary" onClick={submit}>
              Sign Up
            </Button>
          </center>
          <br />
          <center>{msg ? <div className="errmsg">{msg}</div> : null}</center>

          {/* <center>{msg == "Email verification code send." ? <div className="errmsg"><link to="/verifyemail">Click to Verify</link> </div> : null}</center> */}

          <ToastContainer />
        </Grid>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup
