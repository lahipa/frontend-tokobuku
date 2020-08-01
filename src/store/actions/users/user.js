import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT } from "../../../utils/globals";

export const getListUser = () => {
  const request = axios.get(`${ENDPOINT}/users`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_USER,
        payload: response.data,
      });
    });
  };
};

export const getUserById = (id) => {
  const request = axios.get(`${ENDPOINT}/users/${id}`);

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
  const request = axios.put(`${ENDPOINT}/users/${id}`, data);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.UPDATE_USER,
        payload: response.data,
      });

      return dispatch(getListUser());
    });
  };
};

/* export const deleteUser = (id) => {
  const request = axios.delete(`${ENDPOINT}/users/${id}`);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.GET_USER_BY_ID,
        payload: response.data,
      });
      return dispatch(getListUser());
    });
  };
}; */

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      console.log(data, "ini data dari user register");
      const request = await axios.post(`${ENDPOINT}/users/register`, data);

      return dispatch({
        type: actionsTypes.ADD_USER,
        payload: request.data.data,
      });
    } catch (err) {
      console.log(err.response.data.message);
      return err.response.data.message;
    }
  };
};

// Promise Aproach
/* export const loginUser = (data) => {
  const request = axios.post(`${ENDPOINT}/users/login`, data);

  return (dispatch) => {
    request.then((response) => {

      dispatch({
        type: actionsTypes.LOGIN_USER,
        payload: response.data,
      });

      window.localStorage.setItem(
        "userData",
        JSON.stringify(response.data.data)
      );
    });
  };
}; */

// Async Await Aproach
export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      //console.log(data, "ini data dari user login");
      const request = await axios.post(`${ENDPOINT}/users/login`, data);

      return dispatch(
        {
          type: actionsTypes.LOGIN_USER,
          payload: request.data.data.user,
          isLogin: true,
        },

        //console.log(request.data.data, "data user")
        window.localStorage.setItem(
          "dataLogin",
          JSON.stringify(request.data.data)
        )
      );
    } catch (err) {
      console.log(err.response.data.message);
      return err.response.data.message;
    }
  };
};
