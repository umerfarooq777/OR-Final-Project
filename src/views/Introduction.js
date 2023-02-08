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
                <Card.Title as="h4">Light Bootstrap Table Heading</Card.Title>
                <p className="card-category">
                  Created using Montserrat Font Family
                </p>
              </Card.Header>
              <Card.Body>
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of Light Bootstrap Introduction React
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Light Bootstrap Introduction React
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>
                    The Life of Light Bootstrap Introduction React
                  </h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>
                    The Life of Light Bootstrap Introduction React
                  </h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Introduction React
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Introduction React
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
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
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Shaista Raees</h5>
                  </a>
                  <p className="description">Incharge | Operational Research</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
