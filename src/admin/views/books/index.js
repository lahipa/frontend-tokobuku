import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../../../templates/layout/adminlayout";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddBook from "./create";
import TableDataShow from "./components/listItemBooks";
import { dataLogin } from "../../../utils/globals";
import {
  getListBook,
  addBook,
  updateBook,
  deleteBook,
} from "../../../store/actions/books";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(4),
  },
  inputFile: {
    display: "none",
  },
  dialogContent: {
    overflowY: "hidden",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBook: () => dispatch(getListBook()),
    addBook: (data) => dispatch(addBook(data)),
    updateBook: (id, data) => dispatch(updateBook(id, data)),
    deleteBook: (id) => dispatch(deleteBook(id)),
  };
};

const Books = (props) => {
  const [open, setOpen] = useState(false);
  const { books, getBook, addBook, updateBook, deleteBook } = props;
  const classes = useStyles();

  useEffect(() => {
    getBook();
  }, []);

  if (!dataLogin || dataLogin.user.role !== "admin") {
    return <Redirect to="/imcoolmaster" />;
  }

  const handleSubmit = (data) => {
    addBook(data);
  };

  const handleUpdate = (id, updateData) => {
    updateBook(id, updateData);
  };

  const handleDelete = (id) => {
    deleteBook(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let i = 1;
  return (
    <Layout>
      <Box mb={4}>
        <Typography variant="h5">Dashboard</Typography>
        <Typography variant="subtitle">
          Create, update, delete books data.{" "}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <TableContainer component={Paper}>
            <Table aria-label="data table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Book Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">No. ISBN</TableCell>
                  <TableCell align="right">Weight</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.rows && books.rows.length === 0 ? (
                  <TableRow>
                    <TableCell align="center" colspan="7">
                      <h5 style={{ fontSize: "16px", color: "#888" }}>
                        <i>Belum ada data tersimpan!</i>
                      </h5>
                    </TableCell>
                  </TableRow>
                ) : (
                  books.rows &&
                  books.rows.map((val) => {
                    return (
                      <TableDataShow
                        no={i++}
                        key={val.id}
                        listData={val}
                        doUpdate={handleUpdate}
                        doDelete={handleDelete}
                        classes={classes}
                      />
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        className={classes.fab}
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <AddBook
        classes={classes}
        doAdd={handleSubmit}
        open={open}
        handleClose={handleClose}
      />
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);