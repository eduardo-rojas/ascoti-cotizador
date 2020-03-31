import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCorredera } from "../../../actions/correderasAction";

class CorrederaItem extends Component {

  onDeleteClick = Codigo => {
    this.props.deleteCorredera(Codigo);
    window.location.reload(false); 
  };

  render() {
    const { corredera } = this.props;
    return (
      <tr>
       
        <td align="right">
            <Link to={`/correderas/update/${corredera.Codigo}`}>
              <Button size="small" color="info" type="primary">
                Editar 
              </Button>
            <span> </span>   
            </Link> 
            <span onClick={this.onDeleteClick.bind(this, corredera.Codigo)}>
                  <Button size="small" color="info" type="primary">
               Borrar
            </Button>
            </span>
         </td>
        <th scope="row">{corredera.Codigo}</th>
        <td align="left">{corredera.Nombre}</td>
        <td align="right">${corredera.Costo}</td>
        <td align="right">${corredera.Factor}</td>
        <td align="right">${corredera.PrecioVenta}</td>

      </tr>
    );
  }
}


CorrederaItem.propTypes = {
  deleteCorredera: PropTypes.func.isRequired
};

export default connect(null, { deleteCorredera })(CorrederaItem);

