import * as actionsTypes from "../books/actionTypes";
import axios from "axios";
import { ENDPOINTOBSTORE, access_token } from "../../../utils/globals";

export const getListBook = () => {
  const request = axios.get(`${ENDPOINTOBSTORE}/book/findAll`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      console.log(response, "Respon getBook");
      return dispatch({
        type: actionsTypes.GET_BOOK,
        payload: response.data,
      });
    });
  };
};

export const getBookById = (id) => {
  const request = axios.get(`${ENDPOINTOBSTORE}/book/findById/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_BOOK_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateBook = (data) => {
  const request = axios.post(`${ENDPOINTOBSTORE}/book/update`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.UPDATE_BOOK,
        payload: response.data,
      });

      return dispatch(getListBook());
    });
  };
};

export const deleteBook = (id) => {
  const request = axios.delete(`${ENDPOINTOBSTORE}/book/deleteById/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.GET_BOOK_BY_ID,
        payload: response.data,
      });
      return dispatch(getListBook());
    });
  };
};
