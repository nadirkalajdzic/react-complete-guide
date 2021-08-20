import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

function CustomRoute(props) {
  document.title = `Cheap Thrills | ${props.title}`;
  return <props.component></props.component>;
}

export default CustomRoute;
