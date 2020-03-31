import axios from "axios";

export const agregar = newCategoria => {
  return axios
    .post("categorias/agregar", {
      Codigo: newCategoria.Codigo,
      Tipo: newCategoria.Tipo,
    })
    .then(response => {
      console.log("Elemento Categoría ha sido registrado.");
    });
};

export const lista = listaCategorias => {
  return axios.get("categorias/lista").then(res => {
    const categorias = res.data;
    this.setState({ categorias });
  });
};
