import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, api_key } from "../../../utils/globals";

export const getListBook = () => {
  const request = axios.get(`${ENDPOINT}/${api_key}/books`);

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
  const request = axios.get(`${ENDPOINT}/${api_key}/books/${id}`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_BOOK_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateBook = (id, data) => {
  const request = axios.put(`${ENDPOINT}/${api_key}/books/${id}`, data);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.UPDATE_BOOK,
        payload: response.data,
      });

      return dispatch(getListBook());
    });
  };
};

export const deleteBook = (id) => {
  const request = axios.delete(`${ENDPOINT}/${api_key}/books/${id}`);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.GET_BOOK_BY_ID,
        payload: response.data,
      });
      return dispatch(getListBook());
    });
  };
};

export const addBook = (data) => {
  const request = axios.post(`${ENDPOINT}/${api_key}/books`, data);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.ADD_BOOK,
        payload: response.data,
      });
    });
  };
};
