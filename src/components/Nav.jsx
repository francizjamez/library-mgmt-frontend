import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Book as BookIcon,
  Category as CategoryIcon,
  Group as MembersIcon,
  TurnedIn as IssuedBooksIcon,
} from "@material-ui/icons/";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const navigationList = [
  { name: "Books", icon: <BookIcon />, link: "/books" },
  { name: "Categories", icon: <CategoryIcon />, link: "/categories" },
  { name: "Members", icon: <MembersIcon />, link: "/members" },
  { name: "Books Issued", icon: <IssuedBooksIcon />, link: "/members" },
];

export default function Nav() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {navigationList.map(({ name, icon, link }) => (
            <Link to={link}>
              <ListItem button key={name} href="google.com">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} href="google.com" />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );

  function toggleDrawer() {
    setDrawerOpen((prev) => !prev);
  }
}
