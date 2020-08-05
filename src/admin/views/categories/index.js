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
import AddCategory from "./create";
import TableDataShow from "./components/listItemCategories";
import { dataLogin } from "../../../utils/globals";
import {
  getListKategori,
  updateKategori,
  deleteKategori,
  addKategori,
} from "../../../store/actions/categories";

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
    categories: state.categoryReducer.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKategori: () => dispatch(getListKategori()),
    updateKategori: (id, data) => dispatch(updateKategori(id, data)),
    deleteKategori: (id) => dispatch(deleteKategori(id)),
    addKategori: (data) => dispatch(addKategori(data)),
  };
};

const Category = (props) => {
  const [open, setOpen] = useState(false);
  const {
    categories,
    getKategori,
    updateKategori,
    deleteKategori,
    addKategori,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    getKategori();
  }, []);

  if (!dataLogin || dataLogin.user.role !== "admin") {
    return <Redirect to="/imcoolmaster" />;
  }

  const handleSubmit = (data) => {
    addKategori(data);
  };

  const handleUpdate = (id, updateData) => {
    console.log(updateData, "parent data");
    updateKategori(id, updateData);
  };

  const handleDelete = (id) => {
    deleteKategori(id);
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
        <Typography variant="h5">Categories</Typography>
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
                  <TableCell>Category Name</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.rows && categories.rows.length === 0 ? (
                  <TableRow>
                    <TableCell align="center" colspan="7">
                      <h5 style={{ fontSize: "16px", color: "#888" }}>
                        <i>Belum ada data tersimpan!</i>
                      </h5>
                    </TableCell>
                  </TableRow>
                ) : (
                  categories.rows &&
                  categories.rows.map((val) => {
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
      <AddCategory
        classes={classes}
        doAdd={handleSubmit}
        open={open}
        handleClose={handleClose}
      />
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
