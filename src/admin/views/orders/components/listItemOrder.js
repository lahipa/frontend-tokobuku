import React, { useState, useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import EditRounded from "@material-ui/icons/EditRounded";
import numeral from "numeral";

const Orders = (props) => {
  const { no, key, listData } = props;

  let discount = 0;
  let purchasedPrice = listData.total_price - discount;
  return (
    <Fragment>
      <TableRow key={key}>
        <TableCell>{no}</TableCell>
        <TableCell component="th" scope="row">
          {listData.customers_detail.name}
        </TableCell>
        <TableCell>{listData.customers_detail.email}</TableCell>
        <TableCell align="center">{listData.total}</TableCell>
        <TableCell align="right">{`IDR ${numeral(listData.total_price).format(
          "0,0"
        )}`}</TableCell>
        <TableCell align="right">{`IDR ${numeral(discount).format(
          "0,0"
        )}`}</TableCell>
        <TableCell align="right">{`IDR ${numeral(purchasedPrice).format(
          "0,0"
        )}`}</TableCell>
        <TableCell align="center">
          <IconButton color="primary" aria-label="edit">
            <EditRounded />
          </IconButton>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default withRouter(Orders);
