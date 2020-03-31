import axios from "axios";
import {
  GET_ERRORS,
  GET_INTERIOR_MUEBLES,
  GET_INTERIOR_MUEBLE,
  DELETE_INTERIOR_MUEBLE
} from "./types";

export const createInteriorMueble = (
  interiorMueble,
  history
) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/interiores_muebles/agregar",
      interiorMueble
    );
    history.push("/interiores_muebles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getInteriorMuebles = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/interiores_muebles/lista");
  dispatch({
    type: GET_INTERIOR_MUEBLES,
    payload: res.data
  });
};

export const getInteriorMueble = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/interiores_muebles/interiores_mueble/${Codigo}`
  );
  dispatch({
    type: GET_INTERIOR_MUEBLE,
    payload: res.data
  });
};

export const updateInteriorMueble = (
  updatedInteriorMueble,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/interiores_muebles/update",
      updatedInteriorMueble
    );
    history.push("/interiores_muebles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteInteriorMueble = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro de interiorMueble.")) {
    await axios.delete(
      `http://localhost:5000/interiores_muebles/interiores_mueble/${Codigo}`
    );
    dispatch({
      type: DELETE_INTERIOR_MUEBLE,
      payload: Codigo
    });
  }
};
