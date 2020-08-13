import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../../templates/layout";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  Icon,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import CardBuku from "../../components/card/cardBuku";
import { addToCart } from "../../store/actions/cart";
import { getListBook } from "../../store/actions/books";
import { dataLogin } from "../../utils/globals";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const ImportBook = (props) => {
  const { match, books, addToCart, getBook } = props;
  const history = useHistory();
  const classes = useStyles();

  const handleAddCart = (data) => {
    addToCart(data);
  };

  useEffect(() => {
    if (match) {
      getBook({ catid: 3 });
    }
  }, [match]);

  return (
    <Layout>
      <Container>
        <Box pt={5} pb={6} className={classes.sectionTitle}>
          <Typography variant="h5" center component="h3">
            Buku Import
          </Typography>
          <Typography component="subtitle1" color="textSecondary">
            Cari buku import berkualitas? disini tempatnya.
          </Typography>
        </Box>
        <Box pb={20}>
          <Grid container spacing={3}>
            {books && books.rows.length === 0 ? (
              <Box>
                <Alert severity="info">
                  <AlertTitle>Barang kosong?</AlertTitle>
                  <p style={{ lineHeight: "1.5" }}>
                    Maaf sekali jika kamu melihat halaman ini tidak ada buku
                    yang tertampil, hal ini bukan karena kesalahan sistem hanya
                    saja mungkin stok barang untuk penjualan online sedang
                    kosong. Kunjungi kembali situs kami dilain waktu.
                  </p>
                </Alert>
              </Box>
            ) : (
              books.rows &&
              books.rows.slice(0, 8).map((val) => {
                return (
                  <Grid item lg={3} key={val.id}>
                    <CardBuku
                      dataCard={val}
                      doAddToCart={handleAddCart}
                      dataLogin={dataLogin}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBook: (params) => dispatch(getListBook(params)),
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ImportBook)
);
