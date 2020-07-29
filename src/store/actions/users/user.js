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

// Promise Aproach
/* export const loginUser = (data) => {
  const request = axios.post(`${ENDPOINT}/users/login`, data);

  return (dispatch) => {
    request.then((response) => {
      //console.log(response, "response login");

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
          payload: request.data,
        },

        //console.log(request.data.data, "data user")
        window.localStorage.setItem(
          "userData",
          JSON.stringify(request.data.data)
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
};
