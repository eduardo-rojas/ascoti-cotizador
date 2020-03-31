import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteInteriorMueble } from "../../../actions/interiorMuebleAction";

class InteriorMuebleItem extends Component {
  onDeleteClick = Codigo => {
    this.props.deleteInteriorMueble(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar interiorMuebleReducer
  };

  render() {
    const { interiorMueble } = this.props;
    return (
      <tr>
        <td>{interiorMueble.Codigo}</td>
        <td>{interiorMueble.Nombre}</td>
        <td>{interiorMueble.Costo}</td>
        <td>{interiorMueble.Factor}</td>
        <td>{interiorMueble.PrecioVenta}</td>
        <td>
          <Link to={`/interior_muebles/update/${interiorMueble.Codigo}`}>
            <Button className="btn-icon btn-round" color="info" type="button">
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </Button>
          </Link>

          <span onClick={this.onDeleteClick.bind(this, interiorMueble.Codigo)}>
            <Button className="btn-icon btn-round" color="danger" type="button">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </Button>
          </span>
        </td>
      </tr>
    );
  }
}

InteriorMuebleItem.propTypes = {
  deleteInteriorMueble: PropTypes.func.isRequired
};

export default connect(null, { deleteInteriorMueble })(InteriorMuebleItem);
