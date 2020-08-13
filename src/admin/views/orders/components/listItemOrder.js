import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import EditRounded from "@material-ui/icons/EditRounded";
import { convertToIdr } from "../../../../components/functions/convert";

const ListComponent = (props) => {
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
        <TableCell align="right">
          {convertToIdr(listData.total_price)}
        </TableCell>
        <TableCell align="right">{convertToIdr(discount)}</TableCell>
        <TableCell align="right">{convertToIdr(purchasedPrice)}</TableCell>
        <TableCell align="center">
          <Link to={`/imcoolmaster/orders/${listData.id}`}>
            <IconButton color="primary" aria-label="edit">
              <EditRounded />
            </IconButton>
          </Link>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default withRouter(ListComponent);
