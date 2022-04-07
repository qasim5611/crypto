
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from "../../utils/utils";

import Header2 from "../../../Containers/Header/Header2";
import HeaderLogout2 from "../../../Containers/Header/LogoutHeader2";


const PublicRoute = ({component: Component, ...rest}) => {
    return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? (
            <div>
              <HeaderLogout2 />
              <Component {...props} />
            </div>
          ) : (
            <div>
              <Header2 />
              <Component {...props} />
            </div>
          )
        }
      />
    );
};

export default PublicRoute;