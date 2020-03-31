import axios from "axios";
import {
  GET_ERRORS,
  GET_CATEGORIAS,
  GET_CATEGORIA,
  DELETE_CATEGORIA
} from "./types";

export const createCategoria = (categoria, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/categorias/agregar",
      categoria
    );
    history.push("/categorias/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.res.data
    });
  }
};

export const getCategorias = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/categorias/lista");
  dispatch({
    type: GET_CATEGORIAS,
    payload: res.data
  });
};

export const getCategoria = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/categorias/categoria/${Codigo}`
  );
  dispatch({
    type: GET_CATEGORIA,
    payload: res.data
  });
};

export const updateCategoria = (
  updatedCategoria,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/categorias/update",
      updatedCategoria
    );
    history.push("/categorias/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteCategoria = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro de categoria.")) {
    await axios.delete(`http://localhost:5000/categorias/categorias/${Codigo}`);
    dispatch({
      type: DELETE_CATEGORIA,
      payload: Codigo
    });
  }
};
