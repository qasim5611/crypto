import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import history from "./../../../Components/history/history";

import { saveArticle } from "./../../../redux/actions/authuser";

import validator from "validator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./../qasim.css";
import { SignalCellularNullOutlined } from "@material-ui/icons";


function UploadArticle() {

  let dispatch = useDispatch();

  const inputRef = useRef(null);

  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const handleChanger = (newValue) => {
    setValue(newValue);
  };

  ////////////////////////////////////////////////////////////////////////////////////

  const [values, setValues] = useState({
    title: "",
    auther: "",
    date: "",
    subject: "",
    journal: "",
    abstractdata: "",
  });

  // const [valueserr, setValueserr] = useState({ nameerr: "", emailerr: "", passworderr: "" });


const uploadbtn = {
  color: "white",
    background: "#4c7d52",
    padding: "6px 10px",
    borderRadius: "3px",
};




  const [titleerr, settitleerr] = useState("");
  const [authererr, setauthererr] = useState("");
  const [dateerr, setdateerr] = useState("");
  const [subjecterr, setsubjecterr] = useState("");
  const [journalerr, setjournalerr] = useState("");
  const [abstractdataerr, setabstractdataerr] = useState("");



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const [msg, setMsg] = useState(false);

  const getArticle = useSelector((state) => state.Auth.ArticleData);
  // console.log("getArticle is", getArticle);



  if (getArticle.data) {
   
    toast.success("Article Save Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    });


      
  }

  else{
      // toast.error("Not Saved Yet!", {
      //   position: "bottom-left",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
  }



 

  const validate = () => {
    

    
    let isvalid = true;
    if ( values.title.length < 3 || values.title.length > 30 ||  values.title.length == 0  ) {
      isvalid = false;
      settitleerr("Title needs to be 3 to 30 characters long");
      setauthererr("");
      setdateerr("");
      setsubjecterr("");
      setjournalerr("");
      setabstractdataerr("");

    } else if (values.auther.length < 3 || values.auther.length > 30 ||  values.auther.length == 0) {
      isvalid = false;
       settitleerr("");
       setauthererr("Auther Name needs 3 to 30 characters long");
       setdateerr("");
       setsubjecterr("");
       setjournalerr("");
       setabstractdataerr("");
    } else if (values.subject.length < 3 || values.subject.length > 30 ||  values.subject.length == 0) {
      isvalid = false;
     settitleerr("");
     setauthererr("");
     setdateerr("");
     setsubjecterr("Subject needs to be 3 to 30 characters long");
     setjournalerr("");
     setabstractdataerr("");
    }
     else if (values.journal.length < 3 || values.journal.length > 30 ||  values.journal.length == 0) {
      isvalid = false;
     settitleerr("");
     setauthererr("");
     setdateerr("");
     setsubjecterr("");
     setjournalerr("journal needs to be 3 to 30 characters long");
     setabstractdataerr("");
    }
    else if (values.abstractdata.length < 10 || values.abstractdata.length > 100 ||  values.abstractdata.length == 0) {
      isvalid = false;
     settitleerr("");
     setauthererr("");
     setdateerr("");
     setsubjecterr("");
     setjournalerr("");
     setabstractdataerr("Abstract Content needs 10 to 100 characters long");
    }
    else if ( values.date.length == 0) {
      isvalid = false;
     settitleerr("");
     setauthererr("");
     setdateerr("Date Reruired!");
     setsubjecterr("");
     setjournalerr("");
     setabstractdataerr("");
    } else {
       settitleerr("");
       setauthererr("");
       setdateerr("");
       setsubjecterr("");
       setjournalerr("");
       setabstractdataerr("");
    }

    return isvalid;
  };

  const submit = (e) => {
    e.preventDefault();

    //  dispatch(signupdata(values));
    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {

      dispatch(saveArticle(values));

        // inputRef.current.value="";
    }
  };


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
        Enter Your Article Data
      </h3>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} md={6} style={{ backgroundColor: "#fff7f9" }}>
          <center>
            <TextField
              style={{ marginBottom: "20px", width: "70%" }}
              id="outlined-secondary"
              label="Article Title"
              variant="outlined"
              color="secondary"
              value={values.title}
              ref={inputRef}
              onChange={handleChange("title")}
              // validations={[required, vusername]}
            />
          </center>

          <center>
            {titleerr ? <div className="errmsg">{titleerr}</div> : null}
          </center>

          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

          <center>
            {" "}
            <TextField
              style={{ marginBottom: "15px", width: "70%" }}
              id="outlined-secondary"
              label="Auther Name"
              variant="outlined"
              color="secondary"
              onChange={handleChange("auther")}
              value={values.auther}
              // validations={[required, validEmail]}
            />
          </center>

          <center>
            {authererr ? <div className="errmsg">{authererr}</div> : null}
          </center>

          <center>
            {" "}
            <TextField
              style={{ marginBottom: "20px", width: "70%" }}
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              type="date"
              required="required"
              onChange={handleChange("date")}
              value={values.date}
              // validations={[required, validEmail]}
            />
          </center>
          <center>
            {dateerr ? <div className="errmsg">{dateerr}</div> : null}
          </center>

          <center>
            <TextField
              style={{ marginBottom: "20px", width: "70%" }}
              id="outlined-secondary"
              label="Subject"
              variant="outlined"
              color="secondary"
              value={values.subject}
              onChange={handleChange("subject")}
              // validations={[required, vusername]}
            />
          </center>

          <center>
            {subjecterr ? <div className="errmsg">{subjecterr}</div> : null}
          </center>

          <center>
            <TextField
              style={{ marginBottom: "20px", width: "70%" }}
              id="outlined-secondary"
              label="journal Name"
              variant="outlined"
              color="secondary"
              value={values.journal}
              onChange={handleChange("journal")}
              // validations={[required, vusername]}
            />
          </center>

          <center>
            {journalerr ? <div className="errmsg">{journalerr}</div> : null}
          </center>

          <center>
            <TextField
              style={{ marginBottom: "20px", width: "70%" }}
              id="outlined-secondary"
              label="Abstract Desc."
              variant="outlined"
              color="secondary"
              value={values.abstractdata}
              onChange={handleChange("abstractdata")}
              // validations={[required, vusername]}
            />
          </center>

          <center>
            {abstractdataerr ? (
              <div className="errmsg">{abstractdataerr}</div>
            ) : null}
          </center>

          <center>
            {" "}
            <Button variant="contained" onClick={submit} style={uploadbtn}>
              Upload Article
            </Button>
          </center>
          <br />
          {/* <center>{msg ? <div className="errmsg">{msg}</div> : null}</center> */}

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

export default UploadArticle;
