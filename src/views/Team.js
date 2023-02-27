import React, { useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Team() {

  var arr1 = [
    {
      name:"Umer Farooq",
      EB:"19***136"
    },
    {
      name:"Umer Farooq",
      EB:"19***136"
    },
    {
      name:"Umer Faroo",
      EB:"19***136"
    },
  ]

  
  const [CustomerIDArray, setCustomerIDArray] = useState(arr1);
  // console.log("🚀 ~ file: Team.js:35 ~ Team ~ CustomerIDArray", CustomerIDArray)
  
  return (
    <>
      <Container fluid>
        <Row>
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
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-11.JPG")}
                    ></img>
                    <h5 className="title">Haris Ali</h5>
                  </a>
                  <p className="description">EB 19***033</p>
                </div>
                {/* <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
          </Col> <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-9.jpg")}
                    ></img>
                    <h5 className="title">Tatheer Fatima</h5>
                  </a>
                  <p className="description">EB 19***135</p>
                </div>
                {/* <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
          </Col> <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/alipng.png")}
                    ></img>
                    <h5 className="title">Ali Umair</h5>
                  </a>
                  <p className="description">EB 19***013</p>
                </div>
                {/* <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
        <Row>
        <Col md="2"></Col>
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
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-12.jpg")}
                    ></img>
                    <h5 className="title">Abdul Hai Khan</h5>
                  </a>
                  <p className="description">EB 19***003</p>
                </div>
                {/* <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-8.jpg")}
                    ></img>
                    <h5 className="title">Umer Farooq</h5>
                  </a>
                  <p className="description">EB 19***136</p>
                </div>
                {/* <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
          
        <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Team;
