import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../templates/layout";
import { dataLogin } from "../../utils/globals";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import {
  substractFromCart,
  removeFromCart,
  addToCart,
} from "../../store/actions/cart";
import { createOrder } from "../../store/actions/orders";
import { connect } from "react-redux";
import ListCart from "./components/cartListItem";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(15),
  },
  actionCheckout: {
    height: "140px",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-around",
  },
  buttonLink: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },
}));

const mapStateToProps = (state) => {
  return {
    carts: state.cartReducer.carts,
    isOrdered: state.orderReducer.isOrdered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id, uid) => dispatch(removeFromCart(id, uid)),
    substractFromCart: (id, data) => dispatch(substractFromCart(id, data)),
    addToCart: (data) => dispatch(addToCart(data)),
    createOrder: (uid, data) => dispatch(createOrder(uid, data)),
  };
};

const Checkout = (props) => {
  const {
    carts,
    addToCart,
    substractFromCart,
    removeFromCart,
    createOrder,
    isOrdered,
  } = props;

  const classes = useStyles();

  // useEffect(() => {
  //   getListCart(dataLogin.user.uid);
  // }, []);

  const handleAdd = (data) => {
    addToCart(data);
  };

  const handleSubtract = (id, data) => {
    substractFromCart(id, data);
  };

  const handleRemove = (id) => {
    removeFromCart(id, dataLogin.user.uid);
  };

  const id = () => {
    // ramdom unique id
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const removeCartBulk = () => {
    carts && carts.map((val) => removeFromCart(val.id, dataLogin.user.uid));
  };

  let arrayTotalHarga = carts && carts.map((val) => val.books.harga * val.qty);
  let grandTotalHarga = arrayTotalHarga.reduce((a, b) => a + b, 0);
  let totalQty = carts.reduce((a, b) => a + b.qty, 0);
  let serviceCharge = 0;
  let discount = 0;

  const handleSubmitOrder = async () => {
    let obj = {};

    const dataOrderDetails =
      carts &&
      carts.map(
        (val) =>
          (obj = {
            buku_id: val.buku_id,
            title: val.books.title,
            quantity: val.qty,
            price: val.books.harga,
            total: val.books.harga * val.qty,
          })
      );

    const dataOrder = {
      user_id: dataLogin.user.uid,
      total: totalQty,
      total_price: grandTotalHarga,
      orders_detail: dataOrderDetails,
    };

    //createOrder(dataLogin.user.uid, dataOrder);
    // if (carts) {
    //   removeCartBulk();
    // }

    console.log(dataOrder, "data order detail");
  };

  return (
    <>
      {!dataLogin ? (
        <Redirect to="/login" />
      ) : (
        <Layout>
          <section className={classes.root}>
            <Container>
              {isOrdered ? (
                <Grid container spacing={3}>
                  <Grid item md={8}>
                    <Alert severity="info">
                      <AlertTitle>Order berhasil dilakukan</AlertTitle>
                      No traksaksi anda: {"331"}, silahkan cek halaman status
                      pemesanan Anda.
                    </Alert>
                    <Alert severity="warning">
                      Ingin berbelanja lagi? silahakan ke halaman pilih buku
                      atau ke{" "}
                      <Link to="/">
                        <strong>halaman home</strong>
                      </Link>
                    </Alert>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={3}>
                  <Grid item md={7}>
                    {!carts.length ? (
                      <Alert severity="warning">
                        <AlertTitle>Hai, keranjang kamu kosong</AlertTitle>
                        Silahkan kembali ke halaman pilih buku atau ke{" "}
                        <Link to="/">
                          <strong>halaman home</strong>
                        </Link>
                      </Alert>
                    ) : (
                      carts &&
                      carts.map((val) => {
                        return (
                          <>
                            <ListCart
                              key={val.id}
                              listData={val}
                              doAdd={handleAdd}
                              doSubstract={handleSubtract}
                              doRemove={handleRemove}
                            />
                          </>
                        );
                      })
                    )}
                  </Grid>
                  <Grid item md={4}>
                    <TableContainer component={Paper}>
                      <Table className={classes.table}>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Typography
                                component="h6"
                                variant="h6"
                                color="textSecondary"
                              >
                                Total Item
                              </Typography>
                            </TableCell>
                            <TableCell>:</TableCell>
                            <TableCell align="right">
                              <Typography
                                component="h6"
                                variant="h6"
                                color="textSecondary"
                              >
                                {totalQty}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography
                                component="h6"
                                variant="h6"
                                color="textSecondary"
                              >
                                Service / Discount
                              </Typography>
                            </TableCell>
                            <TableCell>:</TableCell>
                            <TableCell align="right">
                              <Typography
                                component="h6"
                                variant="h6"
                                color="textSecondary"
                              >
                                {discount}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography
                                component="h6"
                                variant="h6"
                                color="textSecondary"
                              >
                                Summary
                              </Typography>
                            </TableCell>
                            <TableCell>:</TableCell>
                            <TableCell align="right">
                              <Typography
                                className={classes.sumPriceBook}
                                component="h6"
                                variant="h6"
                                color="textSecondary"
                              >
                                {`IDR ${numeral(grandTotalHarga).format(
                                  "0,0"
                                )}`}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box pt={3} className={classes.actionCheckout}>
                      <Link className={classes.buttonLink} to="/semua-buku">
                        <Button size="large">Kembali Belanja</Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={handleSubmitOrder}
                        disabled={!carts.length ? true : false}
                      >
                        Checkout
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              )}
            </Container>
          </section>
        </Layout>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
