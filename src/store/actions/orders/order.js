import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, dataLogin } from "../../../utils/globals";

export const getAllListOrder = () => {
  const request = axios.get(`${ENDPOINT}/orders`, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        return dispatch({
          type: actionsTypes.GET_LIST_ORDER,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};

export const getAllListOrderByUid = (uid) => {
  const request = axios.get(`${ENDPOINT}/orders?uid=${uid}`, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        return dispatch({
          type: actionsTypes.GET_LIST_ORDER_BY_UID,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};

export const getOrderById = (id) => {
  const request = axios.get(`${ENDPOINT}/orders/${id}`, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        return dispatch({
          type: actionsTypes.GET_ORDER_BY_ID,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};

export const createOrder = (uid, data) => {
  const request = axios.post(`${ENDPOINT}/orders/`, data, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        return dispatch({
          type: actionsTypes.CREATE_ORDER,
          payload: response.data.data,
          isOrdered: true,
        });
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};
