import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
const App = lazy(() => import("./App"));
import registerServiceWorker from "./registerServiceWorker";
import { renderLoader } from './components';

ReactDOM.render(
  <Suspense fallback={renderLoader()}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
registerServiceWorker();
