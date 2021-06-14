import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../../styles";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const sty = useStyles();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  return (
    <Paper elevation={3} className={sty.p1}>
      <Typography variant="h2">Add a user</Typography>
      <Divider />
      <form
        className={`${sty.flexCol} ${sty.gap1} ${sty.p1}`}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          label="Enter name"
          variant="outlined"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          type="email"
          label="Enter email"
          variant="outlined"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          type="password"
          label="Enter password"
          variant="outlined"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <TextField
          type="password"
          label="Confirm password"
          variant="outlined"
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />

        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => setData({ ...data, image: e.target.files[0] })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={sty.selfCenter}
          size="large"
        >
          Confirm
        </Button>
      </form>
    </Paper>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", data.image);

    console.log(formData);

    const response = await axios.post(
      "http://localhost:3001/auth/signup",
      formData
    );

    console.log(response);
  }
}
