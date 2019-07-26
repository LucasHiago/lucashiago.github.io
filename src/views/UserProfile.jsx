import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Profile Lucas Hiago</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Geek Dev - Office</label>
                          <Input
                            defaultValue="Front-end developer"
                            placeholder="Office"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Skype</label>
                          <Input
                            defaultValue="lucas.hiago19"
                            placeholder="Skype Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="lucashiago.dsf@gmail.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Rua José de Paula, 120 - Gigante"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Conselheiro Lafaiete"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Brazil"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="36402-144" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="
                            I have been working with front end since 2009, started with small businesses and now do most of my projects remotely.
                            
                            The main technologies I work with are HTML5 semantic, Javascript, CSS3.
                            
                            I started working with PHP on my first project.
                            
                            And in my last project I worked with Python and Django.
                            
                            I wish to continue my studies in computer engineering which has been locked for 1 year. Deepen in the areas of programming, pursue a career and become senior and full over the next 2 years of development (front end) following to junior (full stack) level and continuing (full stack) to full level;"
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#lucashiago" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/lucas.jpg")}
                      />
                      <h5 className="title">Lucas Hiago</h5>
                    </a>
                    <p className="description">Front-end Developer</p>
                  </div>
                  <div className="card-description">
                    Front-end lover, i want three things in my live. Code, coffe and music. 
                    This is my schedule, Mon to Mon 9:30am at 7:30pm.
                    Hey, check my codepen. And give me stars if you like any code.
                  </div>
                </CardBody>
                <CardFooter>
                  <h5 className="title">You find just recipe food in my facebook, if you want code. Follow me on CODEPEN and GITHUB <i className="fas fa-heart"></i></h5>
                  <div className="button-container">
                    <Button className="btn-icon btn-squared" color="facebook">
                      <a target="_blank" href="https://www.facebook.com/profile.php?id=100009038841372"><i className="fab fa-facebook-f" /></a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
