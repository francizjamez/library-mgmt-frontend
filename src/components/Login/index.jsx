import React, { useState } from "react";
import useStyles from "../../styles";
import {
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";

export default function Login() {
  const sty = useStyles();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <Paper elevation={3} className={sty.p1}>
      <Typography variant="h2">Log in</Typography>
      <Divider />
      <form
        className={`${sty.flexCol} ${sty.gap1} ${sty.p2}`}
        onSubmit={handleSubmit}
      >
        <TextField
          type="email"
          label="Enter email"
          variant="outlined"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          type="password"
          label="Enter password"
          variant="outlined"
          required
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={sty.selfCenter}
          size="large"
        >
          Log in
        </Button>
      </form>
    </Paper>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/auth/login", data);
      console.log(res.status);
    } catch (error) {
      alert(error.response.data.err);
    }
  }
}
