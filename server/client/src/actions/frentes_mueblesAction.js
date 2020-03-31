import axios from "axios";
import {
  GET_ERRORS,
  GET_FRENTES_MUEBLES,
  GET_FRENTES_MUEBLE,
  DELETE_FRENTES_MUEBLE
} from "./types";

export const createFrentes_mueble = (
  frente_mueble,
  history
) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/frentes_muebles/agregar",
      frente_mueble
    );
    history.push("/frentes_muebles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getFrentes_muebles = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/frentes_muebles/lista");
  dispatch({
    type: GET_FRENTES_MUEBLES,
    payload: res.data
  });
};

export const getFrentes_mueble = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/frentes_muebles/frentes_mueble/${Codigo}`
  );
  dispatch({
    type: GET_FRENTES_MUEBLE,
    payload: res.data
  });
};

export const updateFrentes_mueble = (
  updatedFrentes_muebles,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/frentes_muebles/update",
      updatedFrentes_muebles
    );
    history.push("/frentes_muebles/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteFrentes_mueble = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro de frente_mueble.")) {
    await axios.delete(
      `http://localhost:5000/frentes_muebles/frente_mueble/${Codigo}`
    );
    dispatch({
      type: DELETE_FRENTES_MUEBLE,
      payload: Codigo
    });
  }
};
