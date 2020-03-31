import React, { Component } from "react";

class UsersItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <th scope="row">{user.Id}</th>
        <td align="left">{user.id}</td>
        <td align="left">{user.Usuario}</td>
        <td align="left">{user.Nombre}</td>
        <td align="left">{user.Telefono}</td>
        <td align="left">{user.Cliente}</td>
        <td align="left"></td>
        <td align="center">[Editar] [Borrar]</td>
      </tr>
    );
  }
}

export default UsersItem;
