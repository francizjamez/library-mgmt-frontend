import { Router } from "react-router-dom";
import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

axios.defaults.baseURL = "http://localhost:3001/";

axios.interceptors.request.use(
  async (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
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
    return res;
  },
  async (err) => {
    console.log(err.response.data);

    switch (err.response.data.name) {
      case "TokenExpiredError":
        const refreshToken = localStorage.getItem("refresh_token");

        const newAccessToken = await axios.post("/auth/refresh_token", {
          refresh_token: refreshToken,
        });

        console.log(newAccessToken.data.access_token);

        localStorage.setItem("token", newAccessToken.data.access_token);
        history.go("/");
        break;
      default:
        break;
    }

    return Promise.reject(err);
  }
);

export function HistoryProvider(props) {
  return <Router history={history}>{props.children}</Router>;
}
