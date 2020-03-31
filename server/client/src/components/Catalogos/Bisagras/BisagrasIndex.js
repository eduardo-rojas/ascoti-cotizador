import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getBisagras, deleteBisagra } from "../../../actions/bisagrasAction";
import PropTypes from "prop-types";
import BisagraItem from "./BisagraItem";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Table, Button, Typography } from "antd";

const { Text } = Typography;

class BisagrasIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetBisagras();
  }

  onDeleteClick = Codigo => {
    this.props.deleteBisagra(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar bisagraReducer
  };

  render() {
    const { bisagras } = this.props.bisagra;

    const { Column } = Table;
    console.log(bisagras);

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
                <h3 className="text-left">
                  <b>Bisagras</b>
                </h3>

                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                      <Link to="/bisagras/add" className="nav-link">
                        <Button type="primary">Agregar Bisagra</Button>
                      </Link>
                      <div className="col-sm-12 mx-auto">
                        <Table
                          dataSource={bisagras}
                          size="middle"
                          width="auto"
                          pagination={{ pageSize: 50 }}
                        >
                          <Column
                            key="acciones"
                            width="140px"
                            align="center"
                            render={(text, record) => (
                              <span>
                                <Link to={`/bisagras/update/${record.Codigo}`}>
                                  <Button type="default" size="small">
                                    Editar
                                  </Button>
                                </Link>{" "}
                                <Link to={`/bisagras/update/${record.Codigo}`}>
                                  <Button type="default" size="small">
                                    Borrar
                                  </Button>
                                </Link>
                              </span>
                            )}
                          />
                          <Column
                            title="Código"
                            dataIndex="Codigo"
                            key="Codigo"
                            width="150px"
                          />
                          <Column title="Nombre" dataIndex="Nombre" />
                          <Column
                            title="Costo"
                            dataIndex="Costo"
                            align="right"
                            className="column-money"
                            render={(text, record) => (
                              <span>${record.Costo}</span>
                            )}
                          />
                          <Column
                            title="Factor"
                            dataIndex="Factor"
                            align="right"
                          />
                          <Column
                            title="Precio de Venta"
                            dataIndex="PrecioVenta"
                            align="right"
                            render={(text, record) => (
                              <span>${record.PrecioVenta}</span>
                            )}
                          />{" "}
                          <Column
                            title="Activo"
                            dataIndex="Activo"
                            align="center"
                            width="100px"
                            render={(text, record) =>
                              record.Activo ? <Text>Si</Text> : <Text>No</Text>
                            }
                          />
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

BisagrasIndex.propTypes = {
  bisagra: PropTypes.object.isRequired,
  getBisagras: PropTypes.func.isRequired,
  deleteBisagra: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBisagras: () => dispatch(getBisagras()),
    onDeleteClick: () => dispatch(deleteBisagra())
  };
};

const mapStateToProps = state => ({
  bisagra: state.bisagra.bisagras
});

export default connect(mapStateToProps, mapDispatchToProps)(BisagrasIndex);
