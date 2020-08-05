import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { ENDPOINT, dataLogin } from "../../utils/globals";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Toolbar,
  Dialog,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Badge,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMall from "@material-ui/icons/LocalMall";
import MenuNavigation from "../../components/navigation";
import FormLogin from "../../auth/login";
import FormRegister from "../../auth/register";
import { handleLogout } from "../../auth/logout";
import { getListCart } from "../../store/actions/cart";

const mapStateToProps = (state) => {
  return {
    carts: state.cartReducer.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListCart: (uid) => dispatch(getListCart(uid)),
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  toolbarLogo: {
    flex: 1,
    paddingLeft: theme.spacing(3),
    "& img": {
      height: "70px",
      width: "auto",
    },
  },
  toolbarButton: {
    flex: 2,
    paddingRight: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
  },
  toolbar: {
    minHeight: 80,
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#fff",
  },
}));

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [authType, setAuthType] = useState("register");
  const { carts, getListCart } = props;
  const classes = useStyles();

  useEffect(() => {
    if (dataLogin) {
      getListCart(dataLogin.user.uid);
    }
  }, []);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = (authType) => () => {
    setOpen(true);
    setAuthType(authType);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  let total = carts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.qty,
    0
  );

  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <Container className={classes.container}>
          <Toolbar className={classes.toolbarLogo}>
            <Link to="/">
              <img src="/asset/310-bbc.png" />
            </Link>
          </Toolbar>
          <Toolbar className={classes.toolbarButton}>
            <div className={classes.margin}>
              <IconButton
                href={!dataLogin ? "#" : "/checkout"}
                onClick={!dataLogin ? handleDialogOpen("login") : ""}
              >
                {carts.length ? (
                  <Badge badgeContent={total} color="secondary">
                    <LocalMall fontSize="large" />
                  </Badge>
                ) : (
                  <LocalMall fontSize="large" />
                )}
              </IconButton>
            </div>
            {dataLogin ? (
              <div className={classes.margin}>
                <IconButton onClick={handleMenu}>
                  <AccountCircle fontSize="large" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Button
                  size="small"
                  className={classes.margin}
                  aria-label="login"
                  onClick={handleDialogOpen("login")}
                >
                  Login
                </Button>
                <Button
                  size="small"
                  className={classes.margin}
                  aria-label="register"
                  onClick={handleDialogOpen("register")}
                >
                  Daftar
                </Button>
              </div>
            )}
          </Toolbar>
        </Container>
      </Toolbar>
      <MenuNavigation />

      <Dialog
        fullWidth
        maxWidth={authType === "login" ? "xs" : "xs"}
        open={open}
        onClose={handleDialogClose}
      >
        {authType === "login" ? (
          <>
            <FormLogin
              endpoint={ENDPOINT}
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
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
