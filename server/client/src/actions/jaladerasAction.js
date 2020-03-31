import axios from "axios";
import { GET_ERRORS, GET_JALADERAS, GET_JALADERA } from "./types";

export const createJaladera = (jaladera, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/jaladeras/agregar",
      jaladera
    );
    history.push("/catalogos");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getJaladera = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/jaladeras/jaladera/${Codigo}`
  );
  dispatch({
    type: GET_JALADERA,
    payload: res.data
  });
};

export const updateJaladera = (
  updatedJaladera,
  history
) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/jaladeras/update",
      updatedJaladera
    );
    history.push("/jaladeras/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getJaladeras = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/jaladeras/lista");

  dispatch({
    type: GET_JALADERAS,
    payload: res.data.jaladeras
  });
};
