import React, { useEffect, useState, Suspense, lazy } from "react";

import Form from "./../form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// import Header from "./../Header";
import Login from "../Login/login";
import Signup from "./../SignUp/signup";
import Sitehome from "../Sitehome";
import Verifyemail from "../VerifyEmaill/verifyemail";
import VerifyTockenMail from "../ForgetPass/VerifyTockenMail";
import Forgetpass from "../ForgetPass/Forgetpass";
import Newpass from "../ForgetPass/Newpass";
import Notfound from "./../PageNotFound/pagenotfound";
import Sidebar from "./../../Containers/Sidebar/sidebar";

import ArticleShow from "./../../Containers/main/Article/Article";
import ArticleUpload from "./../../Containers/main/UploadArricles/UploadArticle";
import Date from "./../../Containers/main/UploadArricles/date";



import { useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import history from "./../history/history";

import PrivateRoute from "./../Routes/PrivateRoutes/PrivateRoutes";

import PublicRoute from "../Routes/PublicRoutes/PublicRoute";
// import PageNotFound from "../PageNotFound/PageNotFound";
// const state = useSelector((state)=> state.LoginAdmin.)

import Progressbar from "../Login/progressbar";

const AllRoutes = () => {
  // const Form = lazy(() => import("../form.js"));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  return (
    <div>
      {/* <Suspense fallback={<Spinner />}> */}
      <Router history={history} forceRefresh={true}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} >
            <Grid item xs={2} md={2} >
              <Item >
                <Sidebar />
              </Item>
            </Grid>
            <Grid item xs={10} md={10}>
              <Item>
                {/* <MainContect /> */}
                <Switch>
                  <PublicRoute path="/" component={Sitehome} exact={true} />
                  <PublicRoute path="/article" component={ArticleShow} exact={true} />
                  <PrivateRoute path="/articleupload" component={ArticleUpload} exact={true} />

                  <PublicRoute path="/date" component={Date} exact={true} />


                  <PublicRoute path="/signup" component={Signup} exact={true} />
                  <PublicRoute path="/login" component={Login} exact={true} />


                  <PublicRoute
                    path="/Forgetpass"
                    component={Forgetpass}
                    exact={true}
                  />
                  <PublicRoute
                    path="/Newpass"
                    component={Newpass}
                    exact={true}
                  />
                  <PublicRoute
                    path="/verifyemail"
                    component={Verifyemail}
                    exact={true}
                  />

                  <PublicRoute
                    path="/Progressbar"
                    component={Progressbar}
                    exact={true}
                  />
                  <PublicRoute
                    path="/VerifyTockenMail"
                    component={VerifyTockenMail}
                    exact={true}
                  />
                  <PrivateRoute path="/form" component={Form} exact={true} />
                </Switch>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Router>
      {/* </Suspense> */}
    </div>
  );
};

export default AllRoutes;
