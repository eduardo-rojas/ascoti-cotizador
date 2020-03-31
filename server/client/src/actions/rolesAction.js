import axios from "axios";
import {GET_ERRORS, GET_ROLES, GET_ROL} from "./types";

export const getRoles = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/roles/lista");
  dispatch({
    type: GET_ROLES,
    payload: res.data
  });
};

// ** Obtiene el rol para el update

export const getRol = (Id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/roles/rol/${Id}`
  );
  dispatch({
    type: GET_ROL,
    payload: res.data
  });
};

export const updateRol = (
  updateRol,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/roles/update",
      updateRol
    );
    history.push("/roles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};


