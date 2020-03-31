import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getUsers } from "../../../actions/usersAction";
import PropTypes from "prop-types";
import UsersItem from "./UsersItem";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "antd";

class UsersIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetUsers();
  }

  render() {
    const users = this.props.user.users;

    const { Column } = Table;
    console.log(users);

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
                <h3 className="text-left"><b>Usuarios</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                    <div className="col-sm-12 mx-auto"> 
                    <Table dataSource={users} size="middle" >
                    
                    <Column
                        title=""
                        key="acciones"
                        width= "140px"
                        align="center"
                        render={(text, record) => (
                          <span>
                            <Link to={`/users/update/${record.Id}`}>
                            <Button type="default" size="small">
                              Editar
                            </Button>
                            </Link>{" "}
                          </span>
                        )}
                      />
                    <Column title="ID" dataIndex="Id" key="Id" />
                    <Column title="Usuario" dataIndex="Usuario"  />
                    <Column title="Nombre" dataIndex="Nombre" />
                    <Column title="Teléfono" dataIndex="Telefono" />
                    <Column title="Cliente" dataIndex="Cliente" />
                    <Column title="Rol" dataIndex="Rol"/>
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

UsersIndex.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUsers: () => dispatch(getUsers())
  };
}

const mapStateToProps = state => ({
  user: state.user.users
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
