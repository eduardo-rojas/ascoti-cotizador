import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getCategorias } from "../../../actions/categoriasAction";
import PropTypes from "prop-types";
import CategoriaItem from "./CategoriaItem";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "antd";

class CategoriasIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetCategorias();
  }

  render() {
    const { categorias } = this.props.categoria;

    const { Column } = Table;
    console.log(categorias);
  

    //console.log(categorias);
    // console.log(bisagras[1].Costo);

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
                <h3 className="text-left"><b>Categorías</b></h3>
                <div className="container">
                  <div className="card card-body bg-light">
                    <div className="row">
                      <Link to="/categorias/add" className="nav-link">
                        <Button
                          type="primary"
                        >
                          Agregar Categoría
                        </Button>
                      </Link>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 mx-auto">
                      <Table dataSource={categorias} size="middle" pagination={{ pageSize: 50 }}>
                        <Column
                          
                          key="acciones"
                          width= "140px"
                          align="center"
                          render={(text, record) => (
                            <span>
                              <Link to={`/categorias/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/categorias/update/${record.Codigo}`}>
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
                          width= "150px"
                        />
                        <Column title="Categoria" dataIndex="Tipo"/>
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

CategoriasIndex.propTypes = {
  categoria: PropTypes.object.isRequired,
  getCategorias: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCategorias: () => dispatch(getCategorias())
  };
};

const mapStateToProps = state => ({
  categoria: state.categoria.categorias
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriasIndex);
