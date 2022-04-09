
import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from "../../utils/utils";

import Header2 from "../../../Containers/Header/Header2";
import LogoutHeader2 from "../../../Containers/Header/LogoutHeader2";


const PublicRoute = ({component: Component, ...rest}) => {

  console.log("rest");
  console.log(rest);

  console.log(rest.handleDrawerToggle);

 const [qasim, setqasim] = useState("123");

  const [mobileOpen, setMobileOpen] = React.useState(false);


// const handleDrawerToggle = () => {
//   setMobileOpen(!mobileOpen);
// };

    return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route {...rest} render={(props) => isLogin() ? (
            <div>
              <LogoutHeader2 />
              <Component {...props} />
            </div>
          ) : (
            <div>
              <Header2 handleDrawerToggle={rest.handleDrawerToggle} />
              <Component {...props} />
            </div>
          )
        }
      />
    );
};

export default PublicRoute;