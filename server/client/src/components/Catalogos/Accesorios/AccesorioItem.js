import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccesorio } from "../../../actions/accesoriosAction";

class AccesorioItem extends Component {
  onDeleteClick = Codigo => {
    this.props.deleteAccesorio(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar accesorioReducer
  };

  render() {
    const { accesorio } = this.props;
    return (
      <tr>
        <td>{accesorio.Codigo}</td>
        <td>{accesorio.Nombre}</td>
        <td>{accesorio.Costo}</td>
        <td>{accesorio.Factor}</td>
        <td>{accesorio.PrecioVenta}</td>
        <td>{accesorio.Activo}</td>
        <td>
          <Link to={`/accesorios/update/${accesorio.Codigo}`}>
            <Button className="btn-icon btn-round" color="info" type="button">
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </Button>
          </Link>

          <span onClick={this.onDeleteClick.bind(this, accesorio.Codigo)}>
            <Button className="btn-icon btn-round" color="danger" type="button">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </Button>
          </span>
        </td>
      </tr>
    );
  }
}

AccesorioItem.propTypes = {
  deleteAccesorio: PropTypes.func.isRequired
};

export default connect(null, { deleteAccesorio })(AccesorioItem);
