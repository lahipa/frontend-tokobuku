import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, api_key } from "../../../utils/globals";

export const getListUser = () => {
  const request = axios.get(`${ENDPOINT}/${api_key}/users`);

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      return dispatch({
        type: actionsTypes.GET_USER,
        payload: response.data,
      });
    });
  };
};

export const getUserById = (id) => {
  const request = axios.get(`${ENDPOINT}/${api_key}/users/${id}`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_USER_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateUser = (id, data) => {
  const request = axios.put(`${ENDPOINT}/${api_key}/users/${id}`, data);

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.UPDATE_USER,
        payload: response.data,
      });

      return dispatch(getListUser());
    });
  };
};

/* export const deleteUser = (id) => {
  const request = axios.delete(`${ENDPOINT}/${api_key}/users/${id}`);

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.GET_USER_BY_ID,
        payload: response.data,
      });
      return dispatch(getListUser());
    });
  };
}; */

export const addUser = (data) => {
  const request = axios.post(`${ENDPOINT}/${api_key}/users`, data);

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.ADD_USER,
        payload: response.data,
      });
    });
  };
};
