import axios from "axios";
import {
  GET_ERRORS,
  GET_ACCESORIOS,
  GET_ACCESORIO,
  DELETE_ACCESORIO
} from "./types";

export const createAccesorio = (accesorio, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/accesorios/agregar",
      accesorio
    );
    history.push("/accesorios/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getAccesorios = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/accesorios/lista");
  dispatch({
    type: GET_ACCESORIOS,
    payload: res.data
  });
};

export const getAccesorio = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/accesorios/accesorio/${Codigo}`
  );
  dispatch({
    type: GET_ACCESORIO,
    payload: res.data
  });
};

export const updateAccesorio = (
  updatedAccesorio,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/accesorios/update",
      updatedAccesorio
    );
    history.push("/accesorios/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteAccesorio = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro de accesorio.")) {
    await axios.delete(`http://localhost:5000/accesorios/accesorio/${Codigo}`);
    dispatch({
      type: DELETE_ACCESORIO,
      payload: Codigo
    });
  }
};

