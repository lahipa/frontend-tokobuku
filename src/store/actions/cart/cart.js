import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, dataLogin } from "../../../utils/globals";

export const getListCart = (uid) => {
  return async (dispatch) => {
    try {
      const request = await axios.get(`${ENDPOINT}/cart/?uid=${uid}`, {
        headers: {
          Authorization: dataLogin.token,
        },
      });

      return dispatch({
        type: actionsTypes.GET_LIST_CART,
        payload: request.data.data,
      });
    } catch (err) {
      console.log(err.response);
      return err.response;
    }
  };
};

export const substractFromCart = (id, data) => {
  return async (dispatch) => {
    try {
      const request = await axios.put(`${ENDPOINT}/cart/${id}`, data, {
        headers: {
          Authorization: dataLogin.token,
        },
      });

      return dispatch(
        {
          type: actionsTypes.UPDATE_CART_LIST,
          payload: request.data.data,
        },

        dispatch(getListCart(data.user_id))
      );
    } catch (err) {
      console.log(err.response);
      return err.response;
    }
  };
};

export const removeFromCart = (id, uid) => {
  return async (dispatch) => {
    try {
      const request = await axios.delete(`${ENDPOINT}/cart/${id}`, {
        headers: {
          Authorization: dataLogin.token,
        },
      });

      return dispatch(
        {
          type: actionsTypes.REMOVE_FROM_CART,
          payload: request.data.data,
        },

        dispatch(getListCart(uid))
      );
    } catch (err) {
      console.log(err.response);
      return err.response;
    }
  };
};

export const addToCart = (data) => {
  console.log(data, "data from add action");

  return async (dispatch) => {
    try {
      const request = await axios.post(`${ENDPOINT}/cart/`, data, {
        headers: {
          Authorization: dataLogin.token,
        },
      });

      return dispatch(
        {
          type: actionsTypes.ADD_TO_CART,
          payload: request.data.data,
        },

        dispatch(getListCart(data.user_id))
      );
    } catch (err) {
      console.log(err.response);
      return err.response;
    }
  };
};
