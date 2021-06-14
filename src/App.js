import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router";
import BooksList from "./components/BooksList";
import Nav from "./components/Nav";
import Signup from "./components/Signup";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    height: "100vh",
  },
  flex1: { flex: 1 },
  relative: { position: "relative" },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/" />

        <Container className={`${classes.flex1} ${classes.relative}`}>
          <Route path="/books" component={BooksList} />
          <Route path="/signup" component={Signup} />
        </Container>
      </Switch>
    </div>
  );
}

export default App;
