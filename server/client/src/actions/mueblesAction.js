import axios from "axios";
import { GET_ERRORS, GET_MUEBLES, GET_MUEBLE, DELETE_MUEBLE } from "./types";

export const createMueble = (mueble, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/muebles/agregar",
      mueble
    );
    history.push("/muebles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getMuebles = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/muebles/lista");
  dispatch({
    type: GET_MUEBLES,
    payload: res.data
  });
};

export const getMueble = (Codigo, history) => async dispatch => {
  const res = await axios.get(`http://localhost:5000/muebles/mueble/${Codigo}`);
  dispatch({
    type: GET_MUEBLE,
    payload: res.data
  });
};

export const updateMueble = (updatedMueble, history) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/muebles/update",
      updatedMueble
    );
    history.push("/muebles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteMueble = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro del mueble.")) {
    await axios.delete(`http://localhost:5000/muebles/mueble/${Codigo}`);
    dispatch({
      type: DELETE_MUEBLE,
      payload: Codigo
    });
  }
};
