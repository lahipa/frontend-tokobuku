import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cart";
//import { getListBook } from "../../store/actions/books";
import { ENDPOINT, dataLogin } from "../../utils/globals";

// const mapStateToProps = (state) => {
//   return {
//     books: state.bookReducer.books,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    //getBook: () => dispatch(getListBook()),
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const AllBook = (props) => {
  const [books, setBooks] = useState({});
  const { addToCart } = props;

  const classes = useStyles();

  const getBook = async () => {
    try {
      const request = await axios.get(`${ENDPOINT}/books`);

      if (request) {
        setBooks(request.data.data);
      }
    } catch (err) {
      console.log(err.response.data.message);
      //return err.response.data.message;
    }
  };

  const handleAddCart = (data) => {
    addToCart(data);
  };

  useEffect(() => {
    //props.getBook();
    getBook();
  }, []);

  return (
    <Layout>
      <Container>
        <Box pt={5} pb={6} className={classes.sectionTitle}>
          <Typography variant="h5" center component="h3">
            Semua Koleksi Buku
          </Typography>
          <Typography component="subtitle1" color="textSecondary">
            Temukan buku yang kamu cari di sini, harga menarik
          </Typography>
        </Box>
        <Box pb={20}>
          <Grid container spacing={3}>
            {books.length === 0 ? (
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

export default connect(null, mapDispatchToProps)(AllBook);
