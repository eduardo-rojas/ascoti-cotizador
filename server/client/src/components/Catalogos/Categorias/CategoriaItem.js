import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCategoria } from "../../../actions/categoriasAction";

class CategoriaItem extends Component {
  onDeleteClick = Codigo => {
    this.props.deleteCategoria(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar bisagraReducer
  };

  render() {
    const { categoria } = this.props;
    return (
      <tr>
        <td>{categoria.Codigo}</td>
        <td align="left">{categoria.Tipo}</td>
      
      </tr>
    );
  }
}

CategoriaItem.propTypes = {
  deleteCategoria: PropTypes.func.isRequired
};

export default connect(null, { deleteCategoria })(CategoriaItem);
