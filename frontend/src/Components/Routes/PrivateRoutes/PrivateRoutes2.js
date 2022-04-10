import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils/utils';
// import { withRouter } from "react-router-dom";

import Header2 from "../../../Containers/Header/Header2";
import HeaderLogout2 from "../../../Containers/Header/LogoutHeader2";


const PrivateRoute = ({component: Component, ...rest}) => {

  console.log("rest");
  console.log(rest);

  console.log(rest.handleDrawerToggle);



    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? (
            <div>
              <HeaderLogout2 handleDrawerToggle={rest.handleDrawerToggle} />
              <Component {...props} />
            </div>
          ) : (
            <div>
              <Header2 handleDrawerToggle={rest.handleDrawerToggle} />
              <Redirect to="/login" />
            </div>
          )
        }
      />
    );
};

export default PrivateRoute;