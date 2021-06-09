import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import { Book as BookIcon, Add as AddIcon } from "@material-ui/icons/";
import React, { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  book: { display: "flex", justifyContent: "space-between" },
  padding1: { padding: "1rem" },
  bottomRight: { position: "absolute", bottom: "1rem", right: "1rem" },
  flex1: { flex: 1 },
  relative: { position: "relative" },
});

export default function BooksList() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    async function getBooksData() {
      let booksData = await axios.get("http://localhost:3001/books");
      setBooks(booksData.data);
    }
    getBooksData();
  }, []);
  return (
    <>
      <Container className={`${classes.flex1} ${classes.relative}`}>
        <Paper elevation={2}>
          <Typography className={classes.padding1} variant="h2">
            Books List
          </Typography>
          <Divider />
          <List>
            {books.map((book) => {
              const { title, authors } = book;
              return (
                <ListItem button key={title} className={classes.book}>
                  <ListItemIcon>{<BookIcon />}</ListItemIcon>
                  <ListItemText primary={title} secondary={authors.join(",")} />
                  <IconButton onClick={() => handleDelete(book)}>
                    {<DeleteIcon />}
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
        <Fab color="primary" aria-label="add" className={classes.bottomRight}>
          <AddIcon />
        </Fab>
      </Container>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(true)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Arou you sure you want to delete <b>{bookToDelete?.title}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="primary"
            onClick={() => setShowDialog(false)}
          >
            Cancel
          </Button>
          <Button color="primary">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );

  function handleDelete(book) {
    setShowDialog(true);
    setBookToDelete(book);
  }
}
