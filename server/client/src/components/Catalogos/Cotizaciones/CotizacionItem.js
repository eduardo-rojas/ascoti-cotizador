import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCotizacion } from "../../../actions/cotizacionesAction";

class CotizacionItem extends Component {
  onDeleteClick = Codigo => {
    this.props.deleteCotizacion(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar bisagraReducer
  };

  render() {
    const { cotizacion } = this.props;
    return (
      <tr>
        <td>{cotizacion.Proyecto}</td>
        <td>{cotizacion.Cliente}</td>
        <td>{cotizacion.Fecha}</td>
        <td>{cotizacion.Estatus}</td>
        <td>{cotizacion.Total}</td>
        <td>
          <Link to={`/cotizaciones/update/${cotizacion.Proyecto}`}>
            <Button className="btn-icon btn-round" color="info" type="button">
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </Button>
          </Link>

          <span onClick={this.onDeleteClick.bind(this, cotizacion.Proyecto)}>
            <Button className="btn-icon btn-round" color="danger" type="button">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </Button>
          </span>
        </td>
      </tr>
    );
  }
}

CotizacionItem.propTypes = {
  deleteCotizacion: PropTypes.func.isRequired
};

export default connect(null, { deleteCotizacion })(CotizacionItem);
