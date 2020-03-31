import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class RolesItem extends Component {
  render() {
    const { rol } = this.props;
    return (
      <tr>
          <td align="center">
            <Link to={`/roles/update/${rol.Id}`}>
              <Button size="small" color="info" type="primary">
                Editar 
              </Button> 
            </Link> 
         </td>
        <th scope="row">{rol.Id}</th>
        <td align="left">{rol.Rol}</td>
        <td align="left">{rol.Descripcion}</td>
      </tr>
    );
  }
}

export default RolesItem;
