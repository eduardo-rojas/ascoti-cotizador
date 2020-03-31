import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getAccesorios, deleteAccesorio } from "../../../actions/accesoriosAction";
import PropTypes from "prop-types";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Table, Button, Typography } from "antd";

const {Text} = Typography;
class AccesoriosIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetAccesorios();
  }

  onDelete = (Codigo) => {
    this.props.onDeleteClick(Codigo)
    window.location.reload(false);
  };

  render() {
    const { accesorios } = this.props.accesorio;

    const { Column } = Table;

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
                <h3 className="text-left"><b>Accesorios</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                    <Link to="/accesorios/add" className="nav-link">
                        <Button type="primary">
                          Agregar Accesorio
                        </Button>
                      </Link>
                    <div className="col-sm-12 mx-auto">
                    <Table dataSource={accesorios} size="middle" width="auto" pagination={{ pageSize: 50 }}>
                        <Column
                         title="Acciones"
                          key="acciones"
                          width= "140px"
                          align="center"
                         
                          render={(text, record) => (
                            <span>
                              <Link to={`/accesorios/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link onClick={() => this.onDelete(record.Codigo)}>
                                <Button type="default" size="small">
                                  Borrar
                                </Button>
                                <Redirect to="/accesorios/index" />
                              </Link>
                              
                            </span>
                          )}
                        />
                        <Column
                          title="Código"
                          dataIndex="Codigo"
                          key="Codigo"
                          width= "120px"
                        />
                        <Column title="Nombre" dataIndex="Nombre" width= "120px"/>
                        <Column title="Costo" dataIndex="Costo" align="right" width= "120px"  className= "column-money" render={(text, record) => (
                            <span>
                              ${record.Costo}
                            </span>
                          )}/>
                        <Column title="Factor" dataIndex="Factor" align="right" width= "120px"/>
                        <Column title="Precio de Venta" dataIndex="PrecioVenta" align="right" width= "120px"render={(text, record) => (
                            <span>
                              ${record.PrecioVenta}
                            </span>
                          )}/>
                        <Column title="Activo" dataIndex="Activo" align="center" width= "100px" render={(text, record) => (record.Activo ? <Text>Si</Text> : <Text>No</Text>)}/>
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

AccesoriosIndex.propTypes = {
  accesorio: PropTypes.object.isRequired,
  getAccesorios: PropTypes.func.isRequired,
  deleteAccesorio: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAccesorios: () => dispatch(getAccesorios()),
    onDeleteClick: (Codigo) => dispatch(deleteAccesorio(Codigo))
  };
};

const mapStateToProps = state => ({
  accesorio: state.accesorio.accesorios
});

export default connect(mapStateToProps, mapDispatchToProps)(AccesoriosIndex);
