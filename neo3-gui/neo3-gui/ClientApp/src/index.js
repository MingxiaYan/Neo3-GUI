import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <App></App>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
