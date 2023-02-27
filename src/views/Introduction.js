import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Introduction() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Operational Research Simulator:</Card.Title>
                <p className="card-category text-info">
                  Performed : Queueing Model Simulations
                </p>
              </Card.Header>
              <Card.Body>
                <div className="typography-line">
                  <p>
                    {/* <span>Paragraph</span> */}
                    For our final submission of course <b>Operation Research</b>, we have implemented the methods and models taught by our professor <b>Miss Shaista Raees</b>.
                  </p>
                </div>
                <div className="typography-line">
                  <p>
                    {/* <span>Paragraph</span> */}
                    As we all know a simulation is imitation of the operation of real-world process or system over time.
                    The model we have constructed covers the conceptual framework that describes the behaviour of system evolving over time; designed to investigate the “What if” questions about real-world system.
                    
                  </p>
                </div>
                <div className="typography-line">
                  <p>
                    {/* <span>Paragraph</span> */}
                    Through this simulation model M/M/1, M/M/C, M/G/1, M/G/C, G/G/1, and G/G/C we are focusing on the restaurant business and how they can be more efficient with their customer dealing. The business or more likely a global chain “Pizza Hut” is are main focus of study.
                    The data for our model to be able to predict and analyse the future handling was gathered through online resources.
                  </p>
                </div>
                
                <hr></hr>
                <div className="typography-line">
                  {/* <span>Quote</span> */}
                  <blockquote>
                    <p className="blockquote blockquote-primary">.{" "}
                      <br></br>
                      <br></br>
                      {/* <small>- Noaa</small> */}
                    </p>
                  </blockquote>
                </div>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray bg-light"
                      src={require("assets/img/faces/miss.png")}
                    ></img>
                    <h5 className="title">Shaista Raees</h5>
                  </a>
                  <p className="description">Incharge | Operational Research</p>
                </div>
                {/* <p className="description text-center text-info">
                  "Qoute" <br></br>
                </p> */}
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  // onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  // onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  // onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-github-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Introduction;
