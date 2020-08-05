import React, { useState, useEffect } from "react";
import Layout from "../templates/layout";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Toolbar,
  Button,
  Typography,
  Icon,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import CardBuku from "../components/card/cardBuku";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cart";

import { ENDPOINT, dataLogin } from "../utils/globals";

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  containerTagline: {
    minHeight: "48px !important",
    backgroundColor: "#fff",
    position: "relative",
  },
  toolbarSecondary: {
    display: "inline-flex",
    overflowX: "auto",
    flexWrap: "wrap",
    gap: "30px",
    "& *": {
      textDecoration: "none",
      //color: "inherit",
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  },
  sectionTitle: {
    textAlign: "center",
  },
}));

const Caurosel = styled(Box)({
  backgroundColor: "#f5f6f8",
  width: "100%",
  height: "630px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ccc",
});

const Home = (props) => {
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
      return err.response.data.message;
    }
  };

  const handleAddCart = (data) => {
    addToCart(data);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <Layout>
      <Toolbar className={classes.containerTagline}>
        <Container>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            <span>Produk Original & Terjamin</span>
            <span>Gratis Pengiriman</span>
            <span>Gratis Pengembalian</span>
          </Toolbar>
        </Container>
      </Toolbar>
      <Caurosel>
        <h5>Slider Homes</h5>
      </Caurosel>

      <Box>
        <Container>
          <Box pt={10} pb={6} className={classes.sectionTitle}>
            <Typography variant="h5" center component="h3">
              Buku Terlaris 2020
            </Typography>
            <Typography component="subtitle1">
              Temukan Buku Terlaris di Tahun 2020 dengan harga Terbaik{" "}
            </Typography>
          </Box>
          <Box pb={20}>
            <Grid container spacing={3}>
              {books.rows &&
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
                })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default connect(null, mapDispatchToProps)(Home);
