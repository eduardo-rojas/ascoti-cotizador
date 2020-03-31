import axios from "axios";

export const agregar = newAperturaM => {
  return axios
    .post("aperturam/agregar", {
      Codigo: newAperturaM.Codigo,
      Mueble_Fk: newAperturaM.Mueble_Fk,
      Apertura_FK: newAperturaM.Apertura_FK,
      Comentarios: newAperturaM.Comentarios,
    })
    .then(response => {
      console.log("Elemento Apertura Mueble ha sido registrado.");
    });
};

export const lista = listaAperturasMueble => {
  return axios.get("aperturasm/lista").then(res => {
    const aperturasm = res.data;
    this.setState({ aperturasm });
  });
};
