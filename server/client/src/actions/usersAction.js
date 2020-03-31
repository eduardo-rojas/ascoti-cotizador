import axios from "axios";
import {
  GET_ERRORS,
  GET_USERS,
  GET_USER,
} from "./types";


export const getUsers = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/users/lista");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};


