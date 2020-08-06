import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { dataLogin } from "../../utils/globals";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Toolbar,
  Dialog,
  Typography,
  Divider,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Badge,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMall from "@material-ui/icons/LocalMall";
import NotificationsIcon from "@material-ui/icons/Notifications";
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
  marginRight: {
    marginRight: theme.spacing(3),
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

  let firstWord;

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
              <Link to={!dataLogin ? "#" : "/checkout"}>
                <IconButton
                  onClick={!dataLogin ? handleDialogOpen("login") : ""}
                >
                  {carts.length ? (
                    <Badge badgeContent={total} color="secondary">
                      <LocalMall fontSize="" />
                    </Badge>
                  ) : (
                    <LocalMall fontSize="" />
                  )}
                </IconButton>
              </Link>
            </div>
            {dataLogin ? (
              <>
                <div className={classes.marginRight}>
                  <IconButton>
                    <Badge color="secondary">
                      <NotificationsIcon fontSize="" />
                    </Badge>
                  </IconButton>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className={classes.margin}>
                  <a onClick={handleMenu} style={{ cursor: "pointer" }}>
                    <IconButton>
                      <AccountCircle fontSize="" />
                    </IconButton>
                    <span>hi, {dataLogin.user.name.substring(0, 5)}</span>
                  </a>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              </>
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
