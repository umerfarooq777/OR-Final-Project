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
                    {/* <span>Paragraph</span> */}I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am the
                    nucleus. I think that’s a responsibility that I have, to
                    push possibilities, to show people, this is the level that
                    things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <p>
                    {/* <span>Paragraph</span> */}I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am the
                    nucleus. I think that’s a responsibility that I have, to
                    push possibilities, to show people, this is the level that
                    things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <p>
                    {/* <span>Paragraph</span> */}I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am the
                    nucleus. I think that’s a responsibility that I have, to
                    push possibilities, to show people, this is the level that
                    things could be at.
                  </p>
                </div>
                <hr></hr>
                <div className="typography-line">
                  {/* <span>Quote</span> */}
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
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
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-6.jpg")}
                    ></img>
                    <h5 className="title">Shaista Raees</h5>
                  </a>
                  <p className="description">Incharge | Operational Research</p>
                </div>
                <p className="description text-center text-info">
                  "Qoute" <br></br>
                </p>
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
