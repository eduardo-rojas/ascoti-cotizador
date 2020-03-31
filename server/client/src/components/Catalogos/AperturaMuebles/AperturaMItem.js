import React, { Component } from "react";

class AperturaMItem extends Component {
  render() {
    const { aperturam } = this.props;
    return (
      <tr>
        <th scope="row">{aperturam.Codigo}</th>
        <td align="left">{aperturam.Mueble}</td>
        <td align="left">{aperturam.Apertura}</td>
        <td align="left">{aperturam.Comentarios}</td>
      </tr>
    );
  }
}

export default AperturaMItem;
