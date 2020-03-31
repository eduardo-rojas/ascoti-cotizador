import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteFrentes_mueble } from "../../../actions/frentes_mueblesAction";

class Frentes_muebleItem extends Component {
  onDeleteClick = Codigo => {
    this.props.deleteFrentes_mueble(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar frentes_muebleReducer
  };

  render() {
    const { frentes_mueble } = this.props;
    return (
      <tr>
        <td>{frentes_mueble.Codigo}</td>
        <td>{frentes_mueble.Mueble_FK}</td>
        <td>{frentes_mueble.Frente_FK}</td>

        <td>
          <Link to={`/frentes_muebles/update/${frentes_mueble.Codigo}`}>
            <Button className="btn-icon btn-round" color="info" type="button">
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </Button>
          </Link>

          <span onClick={this.onDeleteClick.bind(this, frentes_mueble.Codigo)}>
            <Button className="btn-icon btn-round" color="danger" type="button">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </Button>
          </span>
        </td>
      </tr>
    );
  }
}

Frentes_muebleItem.propTypes = {
  deleteFrentes_mueble: PropTypes.func.isRequired
};

export default connect(null, { deleteFrentes_mueble })(Frentes_muebleItem);
