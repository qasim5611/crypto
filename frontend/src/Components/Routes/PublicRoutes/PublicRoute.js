
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from "./../../utils/utils";

import Header from "./../../../Containers/Header/Header";
import HeaderLogout from "./../../../Containers/Header/LogoutHeader";


const PublicRoute = ({component: Component, ...rest}) => {
  
    return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? (
            <div>
              <HeaderLogout />
              <Component {...props} />
            </div>
          ) : (
            <div>
              <Header />
              <Component {...props} />
            </div>
          )
        }
      />
    );
};

export default PublicRoute;