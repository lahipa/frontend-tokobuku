import React, { useState, useEffect, Fragment } from "react";
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
  Avatar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import LocalMall from "@material-ui/icons/LocalMall";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function CardBuku(props) {
  const { dataCard, doAddToCart, dataLogin } = props;
  const [data, setData] = useState({});
  //console.log(dataCardContent);

  const classes = useStyles();

  useEffect(() => {
    if (dataLogin) {
      setData({
        user_id: dataLogin.user.uid,
        buku_id: dataCard.id,
        qty: 1,
      });
    }
  }, []);

  const handleAddToCart = () => {
    doAddToCart(data);
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
            <Typography>{`IDR ${numeral(dataCard.harga).format(
              "0,0"
            )}`}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={`/rincian-buku/${dataCard.id}`}>Detail</Button>
          {dataLogin ? (
            <Button
              color="secondary"
              onClick={() => {
                handleAddToCart();
              }}
            >
              Add to cart
            </Button>
          ) : (
            <Button color="secondary">Add to cart</Button>
          )}
        </CardActions>
      </Card>
    </Fragment>
  );
}
