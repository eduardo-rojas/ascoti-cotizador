import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteBisagra } from "../../../actions/bisagrasAction";

class BisagraItem extends Component {
  // onDeleteClick = Codigo => {
  //   this.props.deleteBisagra(Codigo);
  //   window.location.reload(false); // refresh temporal -> arreglar bisagraReducer
  // };

  render() {
    const { bisagra } = this.props;
    return (
      <tr>
        {/* <td align="center">
          <Link to={`/roles/update/${bisagra.Codigo}`}>
            <Button size="small" color="info" type="primary">
              Editar
            </Button>
          </Link>
        </td> */}
        <th scope="row">{bisagra.Codigo}</th>
        <td align="left">{bisagra.Nombre}</td>
        <td align="left">{bisagra.Costo}</td>
        <td align="left">{bisagra.Factor}</td>
        <td align="left">{bisagra.PrecioVenta}</td>
      </tr>

      //     <Link to={`/bisagras/update/${bisagra.Codigo}`}>
      //       <Button className="btn-icon btn-round" color="info" type="button">
      //         <i className="now-ui-icons ui-1_settings-gear-63"></i>
      //       </Button>
      //     </Link>

      //     <span onClick={this.onDeleteClick.bind(this, bisagra.Codigo)}>
      //       <Button className="btn-icon btn-round" color="danger" type="button">
      //         <i className="now-ui-icons ui-1_simple-remove"></i>
      //       </Button>
      //     </span>
      //   </td>
      // </tr>
    );
  }
}

export default connect(null, { deleteBisagra })(BisagraItem);
