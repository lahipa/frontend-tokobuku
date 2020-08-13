import * as actionsTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, dataLogin } from "../../../utils/globals";

export const getListBook = (params) => {
  const request = axios.get(`${ENDPOINT}/books`, { params });

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_BOOK,
        payload: response.data.data,
      });
    });
  };
};

export const getBookById = (id) => {
  const request = axios.get(`${ENDPOINT}/books/${id}`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_BOOK_BY_ID,
        payload: response.data.data,
      });
    });
  };
};

export const updateBook = (id, data) => {
  const request = axios.put(`${ENDPOINT}/books/${id}`, data, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        dispatch({
          type: actionsTypes.UPDATE_BOOK,
          payload: response.data.data,
        });

        return dispatch(getListBook());
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};

export const deleteBook = (id) => {
  const request = axios.delete(`${ENDPOINT}/books/${id}`, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        dispatch({
          type: actionsTypes.GET_BOOK_BY_ID,
          payload: response.data.data,
        });
        return dispatch(getListBook());
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};

export const addBook = (data) => {
  const request = axios.post(`${ENDPOINT}/books`, data, {
    headers: {
      Authorization: dataLogin.token,
    },
  });

  return (dispatch) => {
    request
      .then((response) => {
        dispatch({
          type: actionsTypes.ADD_BOOK,
          payload: response.data.data,
        });

        return dispatch(getListBook());
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
};

// Async Await Approach
// --
// export const addBook = (data) => {
//   return async (dispatch) => {
//     try {
//       const request = await axios.post(`${ENDPOINT}/books`, data, {
//         headers: {
//           Authorization: dataLogin.token,
//         },
//       });

//       return dispatch(
//         {
//           type: actionsTypes.ADD_BOOK,
//           payload: request.data.data,
//         },

//         dispatch(getListBook())
//       );
//     } catch (err) {
//       console.log(err.response);
//       return err.response;
//     }
//   };
// };
