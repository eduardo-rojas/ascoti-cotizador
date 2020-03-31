import axios from "axios";
import { GET_ERRORS, GET_APERTURASM } from "./types";

export const createAperturaM = (aperturam, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/aperturasm/agregar",
      aperturam
    );
    history.push("/catalogos");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getAperturasM = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/aperturasm/lista");

  dispatch({
    type: GET_APERTURASM,
    payload: res.data.AperturasM
  });
};
