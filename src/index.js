import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HistoryProvider } from "./networkUtils/interceptors";

ReactDOM.render(
  <HistoryProvider>
    <App />
  </HistoryProvider>,
  document.getElementById("root")
);
