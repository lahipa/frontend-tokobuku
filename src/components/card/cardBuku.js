import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { ENDPOINT } from "../../utils/globals";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Dialog,
  Avatar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { convertToIdr } from "../functions/convert";
import FormLogin from "../../auth/login";
import FormRegister from "../../auth/register";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  buttonLink: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },
}));

export default function CardBuku(props) {
  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState("register");
  const { dataCard, doAddToCart, dataLogin } = props;
  //console.log(dataCardContent);

  const classes = useStyles();

  const handleDialogOpen = (authType) => () => {
    setOpen(true);
    setAuthType(authType);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    let obj = {
      user_id: dataLogin.user.uid,
      buku_id: dataCard.id,
      qty: 1,
    };

    doAddToCart(obj);
  };

  let imageUrl = dataCard.image_url.replace("public/", "");

  let title =
    dataCard.title.length > 25
      ? dataCard.title.substring(0, 25) + " ..."
      : dataCard.title;

  let content =
    dataCard.synopsis.length > 100
      ? dataCard.synopsis.substring(0, 100) + " ..."
      : dataCard.synopsis;

  let imgTitle = dataCard.title.replace(" ", "-");

  return (
    <Fragment>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${ENDPOINT}/${imageUrl}`}
            title={imgTitle}
          />
          <CardContent>
            <Typography gutterBottom component="h3">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>{dataCard.author}</b>, {content}
            </Typography>
            <Typography>{convertToIdr(dataCard.harga)}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            className={classes.buttonLink}
            to={`/rincian-buku/${dataCard.id}`}
          >
            <Button>Detail</Button>
          </Link>
          {dataLogin ? (
            <Button color="secondary" onClick={handleAddToCart}>
              Add to cart
            </Button>
          ) : (
            <>
              <Button
                color="secondary"
                onClick={handleDialogOpen("login")}
                //onClick={!dataLogin ? handleDialogOpen("login") : ""}
              >
                Add to cart
              </Button>
              <Dialog
                fullWidth
                maxWidth={authType === "login" ? "xs" : "xs"}
                open={open}
                onClose={handleDialogClose}
              >
                {authType === "login" ? (
                  <>
                    <FormLogin
                      handleOpen={handleDialogOpen}
                      handleClose={handleDialogClose}
                    />
                  </>
                ) : (
                  <>
                    <FormRegister
                      handleOpen={handleDialogOpen}
                      handleClose={handleDialogClose}
                    />
                  </>
                )}
              </Dialog>
            </>
          )}
        </CardActions>
      </Card>
    </Fragment>
  );
}
