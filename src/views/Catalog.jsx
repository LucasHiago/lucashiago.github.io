import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Selling Projects</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                  <Col md="4">
                    <div className="Project">
                      <h6 className="Project_title">Great Work - Project $2.999</h6>
                      <div className="Project_content">
                        <a href={require("assets/img/great_work.png")} target="_blank">
                          <img src={require("assets/img/great_work.png")} alt=""/>
                        </a>
                      </div>
                      <a href="https://pag.ae/7U_LkuRQq">
                        <button className="btn-full btn btn-primary">
                          <a className="buy-button" href="https://pag.ae/7U_LkuRQq">$2.999</a>
                        </button>
                      </a>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="Project">
                      <h6 className="Project_title">Pede Já - Project $1.300</h6>
                      <div className="Project_content">
                        <a href={require("assets/img/pedeja.png")} target="_blank">
                          <img src={require("assets/img/pedeja.png")} alt=""/>
                        </a>
                      </div>
                      <a href="https://pag.ae/7U_LqiVnL">
                        <button className="btn-full btn btn-primary">
                          <a className="buy-button" href="https://pag.ae/7U_LqiVnL">$1.300</a>
                        </button>
                      </a>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="Project">
                      <h6 className="Project_title">React Template - Project $69</h6>
                      <div className="Project_content">
                        <a href={require("assets/img/react_commerce.png")} target="_blank">
                          <img src={require("assets/img/react_commerce.png")} alt=""/>
                        </a>
                      </div>
                      <a href="https://pag.ae/7U_N6W_m1">
                        <button className="btn-full btn btn-primary">
                          <a className="buy-button" href="https://pag.ae/7U_N6W_m1">$69</a>
                        </button>
                      </a>
                    </div>
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
