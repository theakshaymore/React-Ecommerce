import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated } from ".";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAutheticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoutes;
