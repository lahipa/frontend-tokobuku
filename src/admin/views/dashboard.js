import React from "react";
import clsx from "clsx";
import { Redirect } from "react-router-dom";
import { dataLogin } from "../../utils/globals";
import Layout from "../../templates/layout/adminlayout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  if (!dataLogin || dataLogin.user.role !== "admin") {
    return <Redirect to="/imcoolmaster" />;
  }

  return (
    <Layout>
      <Grid container spacing={3}>
        {/* Hello */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <p>Heloo!</p>
          </Paper>
        </Grid>
        {/* WKK */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <p>WKK</p>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;