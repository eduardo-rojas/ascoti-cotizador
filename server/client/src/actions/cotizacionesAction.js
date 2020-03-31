import axios from "axios";
import { GET_ERRORS, GET_COTIZACIONES, GET_COTIZACION, DELETE_COTIZACION } from "./types";

export const createCotizacion = (cotizacion, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/cotizaciones/agregar",
      cotizacion
    );
    history.push("/cotizaciones/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getCotizaciones = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/cotizaciones/lista");
  dispatch({
    type: GET_COTIZACIONES,
    payload: res.data
  });
};

export const getCotizacion = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/cotizaciones/cotizacion/${Codigo}`
  );
  dispatch({
    type: GET_COTIZACION,
    payload: res.data
  });
};

export const updateCotizacion = (updatedCotizacion, history) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/cotizaciones/update",
      updatedCotizacion
    );
    history.push("/cotizaciones/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteCotizacion = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro de la cotizacion.")) {
    await axios.delete(`http://localhost:5000/cotizaciones/cotizacion/${Codigo}`);
    dispatch({
      type: DELETE_COTIZACION,
      payload: Codigo
    });
  }
};
