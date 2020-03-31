import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMueble } from "../../../actions/mueblesAction";
import MuebleImage from "./MuebleImage";

class MuebleItem extends Component {
  // onDeleteClick = Codigo => {
  //   this.props.deleteMueble(Codigo);
  //   window.location.reload(false); // refresh temporal -> arreglar muebleReducer
  // };

  render() {
    const { mueble } = this.props;
    return (
      <tr>
        <th scope="row">{mueble.Codigo}</th>
        <td align="left">{mueble.Nombre}</td>
        <td align="left">{mueble.Familia_FK}</td>
        <td align="left">{mueble.TiposMueble_FK}</td>
        <td align="left">{mueble.Activo ? "Activo" : "Inactivo"}</td>
        <td align="left">{mueble.Descripcion}</td>
        <td align="left">{mueble.Imagen}</td>
        {/* <td>
          <Link to={`/muebles/update/${mueble.Codigo}`}>
            <Button className="btn-icon btn-round" color="info" type="button">
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </Button>
          </Link>

          <span onClick={this.onDeleteClick.bind(this, mueble.Codigo)}>
            <Button className="btn-icon btn-round" color="danger" type="button">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </Button>
          </span>
        </td> */}
      </tr>
    );
  }
}

// MuebleItem.propTypes = {
//   deleteMueble: PropTypes.func.isRequired
// };

export default connect(null, { deleteMueble })(MuebleItem);
