import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteFamilia } from "../../../actions/familiasAction";

class FamiliaItem extends Component {

  onDeleteClick = Codigo => {
    this.props.deleteFamilia(Codigo);
    window.location.reload(false); 
  };


  render() {
    const { familia } = this.props;
    return (
      <tr>
        <th scope="row">{familia.Codigo}</th>
        <td align="left">{familia.Familia}</td>
        <td>
          <Link to={`/familias/update/${familia.Codigo}`}>
            <Button className="btn-icon" color="info" type="button">
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </Button>
          </Link>

          <span onClick={this.onDeleteClick.bind(this, familia.Codigo)}>
            <Button className="btn-icon" color="danger" type="button">
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </Button>
          </span>
        </td>
      </tr>
    );
  }
}

FamiliaItem.propTypes = {
  deleteFamilia: PropTypes.func.isRequired
};

export default connect(null, { deleteFamilia })(FamiliaItem);
