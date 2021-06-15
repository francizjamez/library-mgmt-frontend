import { Router } from "react-router-dom";
import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

axios.defaults.baseURL = "http://localhost:3001/";

axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    } else {
      alert("TOKEN NOT FOUND");
    }
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
    // const token = localStorage.getItem("token");
    // //   if (token) {
    // //     req.headers.Authorization = `Bearer ${token}`;
    // //   } else {
    // //       history.push(
    // //           "/login"
    // //       )
    // //     alert("TOKEN NOT FOUND");
    // //   }
    // // history.push("/login");
    return res;
  },
  (err) => {
    console.log(err);
    history.push("/login");
    return Promise.reject(err);
  }
);

export function HistoryProvider(props) {
  return <Router history={history}>{props.children}</Router>;
}
