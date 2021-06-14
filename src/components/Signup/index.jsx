import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../../styles";
import { useState } from "react";
import base64 from "base-64";

export default function Signup() {
  const sty = useStyles();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  return (
    <Paper elevation={3} className={sty.p1}>
      <Typography variant="h2">Add a user</Typography>
      <Divider />
      <form className={`${sty.flexCol} ${sty.gap1} ${sty.p1}`}>
        <TextField type="text" label="Enter name" variant="outlined" />
        <TextField type="email" label="Enter email" variant="outlined" />
        <TextField type="password" label="Enter password" variant="outlined" />
        <TextField
          type="password"
          label="Confirm password"
          variant="outlined"
        />

        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={onChange}
        />
        {/* <input
          type="file"
          accept="image/*"
          //   multiple={false}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              image: base64_encode(e.target.files),
            }))
          }
        /> */}

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

  function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      // The file's text will be printed here
      //   console.log(e.target.result);
      setData((prev) => ({ ...prev, image: e.target.result }));
    };

    reader.readAsText(file);
  }
}

function base64_encode(file) {
  console.log(file);
  const encoded = base64.encode(file);
  console.log(encoded);
}
