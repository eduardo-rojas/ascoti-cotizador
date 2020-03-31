import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getRoles } from "../../../actions/rolesAction";
import PropTypes from "prop-types";
import RolesItem from "./RolesItem";
//import { Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "antd";

class RolesIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetRoles();
  }


  render() {
    const roles = this.props.rol.roles;

    const { Column } = Table;
    console.log(roles);
    const data = roles && roles.map(rol => (
      <RolesItem
        key={rol.Id}
        rol={rol}
      />
    ))

    return (
      <div>
        <Navbar />
        <div
          className="section "
          style={{
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-12 mx-auto">
                <h3 className="text-left"><b>Roles</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                    <div className="col-sm-12 mx-auto">                     
                      <Table dataSource={roles} size="middle" >
                    
                      <Column
                          title=""
                          key="acciones"
                          width= "140px"
                          align="center"
                          render={(text, record) => (
                            <span>
                              <Link to={`/roles/update/${record.Id}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              
                              
                            </span>
                          )}
                        />
                      <Column title="ID" dataIndex="Id" key="Id" />
                      <Column title="Rol" dataIndex="Rol"  />
                      <Column title="Descripción" dataIndex="Descripcion" width= "450px" />

                      </Table> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DarkFooter />
      </div>
    );
  }
}

RolesIndex.propTypes = {
  rol: PropTypes.object.isRequired,
  getRoles: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRoles: () => dispatch(getRoles())
  };
}

const mapStateToProps = state => ({
  rol: state.rol.roles
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesIndex);
