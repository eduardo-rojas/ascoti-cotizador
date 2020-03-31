import axios from "axios";

export const agregar = newFamilia => {
  return axios
    .post("familias/agregar", {
      Codigo: newFamilia.Codigo,
      Familia: newFamilia.Familia,
    })
    .then(response => {
      console.log("Elemento Familia ha sido registrado.");
    });
};

export const lista = listaFamilias => {
  return axios.get("familias/lista").then(res => {
    const familias = res.data;
    this.setState({ familias });
  });
};
