import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router";
import BooksList from "./components/BooksList";
import Nav from "./components/Nav";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    height: "100vh",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/" />
        <Route path="/books" component={BooksList} />
      </Switch>
    </div>
  );
}

export default App;
