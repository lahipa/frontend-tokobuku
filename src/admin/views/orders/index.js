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
import TableDataShow from "./components/listItemOrder";
import { dataLogin } from "../../../utils/globals";
import { getAllListOrder, getOrderById } from "../../../store/actions/orders";

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
    orders: state.orderReducer.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListOrder: () => dispatch(getAllListOrder()),
  };
};

const Orders = (props) => {
  const { match, orders, getListOrder } = props;
  const classes = useStyles();

  useEffect(() => {
    getListOrder();
    console.log(orders, "data orders");
  }, []);

  if (!dataLogin || dataLogin.user.role !== "admin") {
    return <Redirect to="/imcoolmaster" />;
  }

  let i = 1;
  return (
    <Layout>
      <Box mb={4}>
        <Typography variant="h5">Orders</Typography>
        <Typography variant="subtitle">
          Check and update orders data.{" "}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <TableContainer component={Paper}>
            <Table aria-label="data table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Disc</TableCell>
                  <TableCell align="right">Summary</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              {console.log(orders, "cek ada ga?")}

              <TableBody>
                {orders.rows && orders.rows.length === 0 ? (
                  <TableRow>
                    <TableCell align="center" colspan="7">
                      <h5 style={{ fontSize: "16px", color: "#888" }}>
                        <i>Belum ada data tersimpan!</i>
                      </h5>
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.rows &&
                  orders.rows.map((val) => {
                    return (
                      <TableDataShow
                        no={i++}
                        key={val.id}
                        listData={val}
                        //doUpdate={handleUpdate}
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
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
