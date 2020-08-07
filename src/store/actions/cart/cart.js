import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, dataLogin } from "../../../utils/globals";

export const getListCart = (uid) => {
  const request = axios.get(`${ENDPOINT}/cart?uid=${uid}`, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        return dispatch({
          type: actionsTypes.GET_LIST_CART,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.message);
        return err.response.message;
      });
  };
};

export const substractFromCart = (id, data) => {
  const request = axios.put(`${ENDPOINT}/cart/${id}`, data, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        dispatch({
          type: actionsTypes.UPDATE_CART_LIST,
          payload: response.data.data,
        });

        return dispatch(getListCart(data.user_id));
      })
      .catch((err) => {
        console.log(err.response.message);
        return err.response.message;
      });
  };
};

export const removeFromCart = (id, uid) => {
  const request = axios.delete(`${ENDPOINT}/cart/${id}`, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        dispatch({
          type: actionsTypes.REMOVE_FROM_CART,
          payload: response.data.data,
        });

        return dispatch(getListCart(uid));
      })
      .catch((err) => {
        console.log(err.response.message);
        return err.response.message;
      });
  };
};

export const addToCart = (data) => {
  const request = axios.post(`${ENDPOINT}/cart/`, data, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        dispatch({
          type: actionsTypes.ADD_TO_CART,
          payload: response.data.data,
        });

        return dispatch(getListCart(data.user_id));
      })
      .catch((err) => {
        console.log(err.response.message);
        return err.response.message;
      });
  };
};

// Async Await Approach
// --
// export const addToCart = (data) => {
//   console.log(data, "data from add action");

//   return async (dispatch) => {
//     try {
//       const request = await axios.post(`${ENDPOINT}/cart/`, data, {
//         headers: {
//           Authorization: dataLogin.token,
//         },
//       });

//       return dispatch(
//         {
//           type: actionsTypes.ADD_TO_CART,
//           payload: request.data.data,
//         },

//         dispatch(getListCart(data.user_id))
//       );
//     } catch (err) {
//       console.log(err.response);
//       return err.response;
//     }
//   };
// };
