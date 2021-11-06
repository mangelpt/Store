import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
  component: Component,
  ...restOfProps
}) {


  return (
    <Route
      {...restOfProps}
      render={(props) =>
        sessionStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}