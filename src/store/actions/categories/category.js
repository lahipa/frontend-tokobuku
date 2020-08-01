import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, dataLogin } from "../../../utils/globals";

export const getListKategori = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(`${ENDPOINT}/kategori`);

      return dispatch({
        type: actionsTypes.GET_LIST_KATEGORI,
        payload: request.data.data,
      });
    } catch (err) {
      console.log(err.response.data.message);
      return err.response.data.message;
    }
  };
};

export const addKategori = (data) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(`${ENDPOINT}/kategori`, data, {
        headers: {
          Authorization: dataLogin.token,
        },
      });

      return dispatch(
        {
          type: actionsTypes.ADD_KATEGORI,
          payload: request.data.data,
        },

        getListKategori()
      );
    } catch (err) {
      console.log(err.response.data.message);
      return err.response.data.message;
    }
  };
};
