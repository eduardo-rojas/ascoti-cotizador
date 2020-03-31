import axios from "axios";



export const lista = listaRoles => {
  return axios.get("roles/lista").then(res => {
    const roles = res.data;
    this.setState({ roles });
  });
};
