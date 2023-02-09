import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <CssBaseline>
//       <App />
//     </CssBaseline>
//   </BrowserRouter>
// );
// import { ScrollerMotion } from 'scroller-motion';

// import {render} from
// const container = (document.getElementById('root'));
// root.render(
//   <>
//   <Provider store={ store }>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </Provider>
//   </>
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
