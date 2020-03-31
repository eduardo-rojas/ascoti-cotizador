import React, { Component } from "react";

class JaladeraItem extends Component {
  render() {
    const { jaladera } = this.props;
    return (
      <tr>
        <th scope="row">{jaladera.Codigo}</th>
        <td align="left">{jaladera.Nombre}</td>
        <td align="right">${jaladera.Costo}</td>
        <td align="right">${jaladera.Factor}</td>
        <td align="right">${jaladera.PrecioVenta}</td>
      </tr>
    );
  }
}

export default JaladeraItem;
