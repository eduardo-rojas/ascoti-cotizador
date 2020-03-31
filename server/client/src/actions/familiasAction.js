import axios from "axios";
import {
  GET_ERRORS,
  GET_FAMILIAS,
  GET_FAMILIA,
  DELETE_FAMILIA
} from "./types";

// ** Crea el registro de familia y regresa a la vista de lista

export const createFamilia = (familia, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/familias/agregar",
      familia
    );
      console.log(res);
    history.push("/familias/index");
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// ** Obtiene familias para la vista de lista

export const getFamilias = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/familias/lista");
  dispatch({
    type: GET_FAMILIAS,
    payload: res.data
  });
};

// ** Obtiene familias para el update

export const getFamilia = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/familias/familia/${Codigo}`
  );
  dispatch({
    type: GET_FAMILIA,
    payload: res.data
  });
};

// ** Actualiza la familia seleccionada

export const updateFamilia = (
  updateFamilia,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/familias/update",
      updateFamilia
    );
    history.push("/familias/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// ** Elimina la familia seleccionada

export const deleteFamilia = Codigo => async dispatch => {
  if (window.confirm("¿Desea borrar el registro de familia?")) {
    await axios.delete(`http://localhost:5000/familias/familia/${Codigo}`);
    dispatch({
      type: DELETE_FAMILIA,
      payload: Codigo
    });
  }
};
