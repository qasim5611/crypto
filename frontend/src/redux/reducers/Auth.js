import {
  SAVE_FORM,
  GET_FORMS,
  DELETE_FORM,
  FORM_UPDATE,
  SAVE_SIGNUP,
  DUPERR_MSG,
  GET_AUTH,
  MSG_LOGIN,
  LOGOUT,
  ISTOKEN_OK,
  MSG_LOGINS,
  FORG_PASS,
  FORG_PASSERR,
  UPDATEPASS_MSG,
  CLEAR_STATE,
  ISTOKEN_OKTOEDIT,
  ARTICLE_SVE,
} from "../constat";

import history from "../../Components/history/history";
import jwt_decode from "jwt-decode";
import { NaturePeopleOutlined } from "@material-ui/icons";


// import { useHistory, useRouteMatch } from "react-router-dom";
// import history from "../../Components/history/history";
// import {history} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// let initState = {
//   msg: null,
//   isCategoryDeleted: null,
//   companyEditMsg: null,
//   isDataComing: false,
// };


let token = localStorage.getItem("token");



var initState = {

ArticleData: "",

  ErrMsg: "",
  Email: "",

  // auth: '',
  // token: '',
  // msg: '',
  TokenMsg: "",

  data: {
    auth: "",
    msg: "",
    token: "",
  },
  userDetail: "",
  userInfo: "",

  ForgPassMsg: "",
  ForgPassMsgMail: "",
  PassUpdateMsg: "",

  TokenMsgPassUpdate:'',
};

export function Auth(state = initState, action) {
  
  switch (action.type) {
    case MSG_LOGIN:
      console.log("reducer run login", action.payload);

      console.log("reducer run", action.payload.user);

      state.userDetail = action.payload.user._id
        ? action.payload.user._id
        : null;
      state.userInfo = action.payload.user;

      console.log("state.userDetail", state.userDetail);

      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
      let tokens = localStorage.getItem("token");

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        data: action.payload,
        userDetail: action.payload.user._id,
      };

      break;

    case MSG_LOGINS:
      console.log("reducer run login", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        data: action.payload,
      };

      break;

    case LOGOUT:
      localStorage.removeItem("token");
      state.userDetail = null;
      state.userInfo = null;
      state.TokenMsg = "";
      state.ErrMsg = "";

      state.data = "";

      setTimeout(() => {
        history.push("/");
      });

      break;

    case FORG_PASSERR:
      console.log("reducer Forgot Pass Err", action.payload);

      return {
        ...state,
        ForgPassMsg: action.payload.msg,
        // ForgPassMsgMail: action.payload.user.email,
      };

      break;

    case FORG_PASS:
      console.log("reducer Forgot Pass", action.payload);

      return {
        ...state,
        ForgPassMsg: action.payload.msg,
        ForgPassMsgMail: action.payload.user.email,
      };

      break;

    case ISTOKEN_OK:
      // console.log(action.payload.data);
      // localStorage.removeItem("token");
      // state.userDetail = null;
      // setTimeout(() => {
      //   history.push("/");
      // });

      return {
        ...state,
        TokenMsg: action.payload.data.msg,
      };

      break;

    case ISTOKEN_OKTOEDIT:
      // console.log(action.payload.data);
      // localStorage.removeItem("token");
      // state.userDetail = null;
      // setTimeout(() => {
      //   history.push("/");
      // });

      return {
        ...state,
        TokenMsgPassUpdate: action.payload.data.msg,
      };

      break;

    case UPDATEPASS_MSG:
      return {
        ...state,
        PassUpdateMsg: action.payload.data.msg,
      };

      break;

    case CLEAR_STATE:
      console.log("ClearState", action.payload.data);
      return {
        ...state,
        PassUpdateMsg: action.payload.data,
      };

      break;
    case DUPERR_MSG:
      console.log("reducer run", action.payload);

      console.log("reducer run", action.payload.data);

      console.log("reducer mailid", action.payload.data.mailret);
      console.log("reducer msg", action.payload.data.msg);

      console.log("reducer msg", action.payload.data.msg);

      return {
        ...state,
        // ErrMsg: action.payload.data ? action.payload.data : action.payload.data.msg,4
        ErrMsg: action.payload.data.msg,
        Email: action.payload.data.mailret,
      };

      break;

    case GET_FORMS:
      console.log("reducer run", action.payload);
      console.log("reducer run", action.payload.status);

      return {
        ...state,
        DBFormdata: action.payload,
      };

      break;

    case ARTICLE_SVE:
      console.log("article reducer run", action.payload);

      return {
        ...state,
        ArticleData: action.payload,
      };

      break;

    case DELETE_FORM:
      console.log("data in reducer for delete action", action.payload._id);
      let filterStudents = state.DBFormdata.filter(
        (item) => item._id !== action.payload._id
      );
      console.log("filterStudents", filterStudents);
      return {
        ...state,
        //  DBFormdata: [...DBFormdata, filterStudents],
        DBFormdata: filterStudents,
      };

      break;

    case FORM_UPDATE:
      // state.companyEditMsg = "Company Successfully Edited";
      console.log("Company Successfully Edited");

      break;

    default:
      break;
  }
  return state;
}
