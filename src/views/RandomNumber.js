import React, { useState } from "react";
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

import serverGif from "assets/img/Server.gif";
import NotificationAlert from "react-notification-alert";

// function TableRow(props) {
//   // console.log(props.obj)
//   return (
//     <tr>
//       <td>1</td>
//       <td>Dakota Rice</td>
//       <td>$36,738</td>
//       <td>Niger</td>
//       <td>Oud-Turnhout</td>
//     </tr>
//   );
// }

function RandomNumber() {
  const [server, setServer] = useState(1);
  const [customers, setCustomers] = useState(5);
  const [IAMean, setIAMean] = useState("");
  const [STMean, setSTMean] = useState("");


  const [final, setFinal] = useState([]);

  let rows = customers;
  let columns = 9;
  let table = [];

  var time = 0; // The current time
  var initialCustomer = 0; // The number of customers in the queue
  var totalWaitTime = 0; // The total wait time for all customers

  function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) return 1;
    while (num > 1) {
      num--;
      result *= num;
    }
    return result;
  }
  factorialize(5);

  //!=================================================Simulation
  // let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // let mappedArray = array.map(subArray => subArray.map(x => x * 2));

  // console.log(mappedArray);

  const eConts = 2.718281828;

  const Column1Cal = (e, minusLambda, lambda, customer) => {
    var ans = (e ** minusLambda * lambda ** customer) / factorialize(customer);
    return ans;
  };

  const generate_IA = (customers) => {
    var IA = (Math.random() * 10000) % customers;
    return IA;
  };
  const generate_ST = (meu) => {
    var ST = Math.round(-meu * Math.log(Math.random()));
    return ST;
  };

  const Calculate1 = (e) => {
    e.preventDefault();
    if (IAMean == "" || STMean == "" || customers == "") {
      notify("tr", "Input fields can't be empty");
    } else {
      var lambda = IAMean;
      var minusLambda = IAMean * -1;
      var meu = STMean;
      // console.log(server,customers,IAMean,STMean);
      let previousValue;

      for (let i = 0; i < rows; i++) {
        table[i] = [];

        //?================================================= Col 1 Calculator Values
        table[i][0] = Column1Cal(eConts, minusLambda, lambda, i);

        //?================================================= Col 2 Cummulative Probability
        if (i == 0) {
          table[i][1] = table[i][0];
        } else {
          table[i][1] = table[i - 1][1] + table[i][0];
          //current value = [pre row value + pre col] , [current row value]
        }
        //?================================================= Col 3 Lookup Probability

        if (i == 0) {
          table[i][2] = 0;
        } else {
          table[i][2] = table[i - 1][1];
          //current value = [pre row value + pre col] , [current row value]
        }
        //?================================================= Col 4 no b/w arrival

        table[i][3] = i;

        //?================================================= Col 5 range 1
        if (i == 0) {
          table[i][4] = table[i][2];
        } else {
          table[i][4] = table[i][2] + 0.0001;
        }

        //?================================================= Col 6 range 2

        table[i][5] = table[i][1];

        //?================================================= Col 7 Inter Arrival

        table[i][6] = Math.floor(generate_IA(rows));

        //?================================================= Col 8 Arrival
        if (i == 0) {
          table[i][7] = table[i][6];
        } else {
          table[i][7] = Math.floor(table[i][6] + table[i - 1][7]);
        }

        //?================================================= Col 9 Service Time
        table[i][8] = generate_ST(meu);

        // for (let j = 0; j < columns; j++) {
        //   table[i][j] = 0;
        // }
      }
      // console.log(table)
      setFinal(table)
    }
  };

  //!=================================================notification
  const notificationAlertRef = React.useRef(null);
  const notify = (place, msg) => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>{msg}</div>
        </div>
      ),
      type: "info",
      icon: "nc-icon nc-bell-55",
      autoDismiss: 5,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  return (
    <>
      <Container fluid>
        <div className="rna-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>

        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                {/* <Card.Title as="h4">Queue Configuration:</Card.Title> */}
              </Card.Header>
              <Card.Body>
                <Form>
                  {/* /====================ROW 1/ */}

                  <Row>
                    <Col className="pr-1 typography-line" md="2">
                      <p className="">
                        {" "}
                        <i className="nc-icon nc-layers-3 "></i> Server(s)
                      </p>
                      <input
                        type="number"
                        className="serverInputRan"
                        min="1"
                        value={server}
                        onChange={(e) => {
                          setServer(e.target.value);
                        }}
                      ></input>
                    </Col>
                    <Col className="pr-1" md="2">
                      <p>No of Customers:</p>

                      <Form.Control
                        placeholder="No of Customers"
                        type="number"
                        width="80%"
                        className="mb-3"
                        value={customers}
                        onChange={(e) => {
                          setCustomers(e.target.value);
                        }}
                      ></Form.Control>
                    </Col>
                    <Col className="pr-1" md="4">
                      <p>Mean of Inter Arrival (1/λ) :</p>

                      <Form.Control
                        placeholder="Mean valueof Inter Arrival (mins)"
                        type="number"
                        width="80%"
                        className="mb-3"
                        value={IAMean}
                        onChange={(e) => {
                          setIAMean(e.target.value);
                        }}
                      ></Form.Control>
                    </Col>

                    <Col className="pr-1" md="4">
                      <p>Mean of Service Time (1/µ) :</p>

                      <Form.Control
                        placeholder="Mean valueof Service Time (mins)"
                        type="number"
                        width="80%"
                        className="mb-3"
                        value={STMean}
                        onChange={(e) => {
                          setSTMean(e.target.value);
                        }}
                      ></Form.Control>
                    </Col>

                    {/* <Col className="px-1" md="7">
                      <Row>
                        <Col className="px-1" md="5"></Col>
                        <Col md="7">
                          <div>
                            <img src={serverGif} />
                          </div>
                        </Col>
                        
                      </Row>
                    </Col> */}
                  </Row>
                  {/* /====================ROW 2/ */}

                  <Row>
                    <Col className="pl-1" md="4"></Col>
                    <Col className="pl-1" md="4">
                      {IAMean == "" || STMean == "" || customers == "" ? (
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                          disabled
                        >
                          Simulate
                        </Button>
                      ) : (
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                          onClick={(e) => {
                            Calculate1(e);
                          }}
                        >
                          Simulate
                        </Button>
                      )}
                    </Col>
                    <Col className="pl-1" md="4"></Col>
                  </Row>

                  {/* <Button block onClick={() => notify("tr","poka")} variant="default">
                    Top Right
                  </Button> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">
                  Random Customer Arrival Simulation:
                </Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">S.no</th>
                      <th className="border-0">Inter Arrival</th>
                      <th className="border-0">Customer Arrival</th>
                      <th className="border-0">Customer Service Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {final.map((subArray, i) => (
                      <tr key={i}>
                        <td>{i+1}</td>  
                        {subArray.map((x, j) => 
                        


                        // {if(j>=6||j<=8) {
                        //   <td key={j}>{x}</td>  
                        // } else {
                        //   <td key={j}>{x}</td>  
                        // }}
                        
                       { if(j>=6&&j<=8) {
                          return <td key={j}>{x}</td>    
                          
                        } else {
                          return null
                        }}
                                    
                                                     
                        
                        
                        )}
                      </tr>
                    ))}

                    {/* {table.map((object, i) => 
                  <TableRow obj={object} key={i} />
                  )} */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </Container>
    </>
  );
}

export default RandomNumber;
