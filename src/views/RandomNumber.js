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
import { generate } from "assets/formulae/RandomSimulation";
import { serverDataExport } from "assets/formulae/RandomSimulation";

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
  const [server, setServer] = useState(4);
  const [customers, setCustomers] = useState(10);
  const [IAMean, setIAMean] = useState(2.65);
  const [STMean, setSTMean] = useState(12.45);

  const [ShowTable, setShowTable] = useState(false);
  
  const [CustomerIDArray, setCustomerIDArray] = useState([]);

  const [IAArray, setIAArray] = useState([]);
  // console.log("🚀 ~ file: RandomNumber.js:42 ~ RandomNumber ~ IAArray", IAArray)
  const [STArrayIN, setSTArrayIN] = useState([]);
  const [STArray, setSTArray] = useState([]);
  // console.log("🚀 ~ file: RandomNumber.js:44 ~ RandomNumber ~ STArray", STArray)
  const [TAArray, setTAArray] = useState([]);
  // console.log("🚀 ~ file: RandomNumber.js:50 ~ RandomNumber ~ TAArray", TAArray)
  const [WTArray, setWTArray] = useState([]);
  // console.log("🚀 ~ file: RandomNumber.js:52 ~ RandomNumber ~ WTArray", WTArray)

  const [final, setFinal] = useState([]);
  // console.log("🚀 ~ file: RandomNumber.js:48 ~ RandomNumber ~ final", final)
  const [serverData, setServerData] = useState([]);

  const [serverLabelMain, setServerLabelMain] = useState([]);
  const [serverPartsMain, setServerPartsMain] = useState([]);
  
  var customerLabel = []
  
  var serverLabel = []
  var serverParts = []

  var TAT = []
  var ST = []
  var WT = []


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

  const ShowTableToggle = (e) => {
    e.preventDefault();
    setShowTable(!ShowTable)
  }

  const Calculate1 = (e) => {
    e.preventDefault();
    if (IAMean == "" || STMean == "" || customers == "") {
      notify("tr", "Input fields can't be empty");
    }else if (IAMean<0 || STMean <0 ||customers<0||server<0) {
      notify("tr", "Please, enter value greater than zero");
    } else {
      var lambda = IAMean;
      var minusLambda = IAMean * -1;
      var meu = STMean;
      // console.log(server,customers,IAMean,STMean);

      setIAArray([])
      setSTArray([])

      setTAArray([])
      setWTArray([])


      for (let i = 0; i < rows; i++) {
        customerLabel.push(`C${i+1}`)
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
        IAArray.push(table[i][6])

        //?================================================= Col 8 Arrival
        if (i == 0) {
          table[i][7] = table[i][6];
        } else {
          table[i][7] = Math.floor(table[i][6] + table[i - 1][7]);
        }

        //?================================================= Col 9 Service Time
        table[i][8] = generate_ST(meu);
        STArrayIN.push(table[i][8])
        // for (let j = 0; j < columns; j++) {
        //   table[i][j] = 0;
        // }
      }
      // console.log(table)
      var ans = generate(IAArray,STArrayIN,server);
      setFinal(ans.customers)
      
      for (let index = 0; index < ans.customers.length; index++) {
        TAT.push(ans.customers[index].turnaroundTime+1)
        ST.push(ans.customers[index].serviceTime-0.5)
        
      WT.push(ans.customers[index].waitTime)
        
      }
      
      setServerData(ans.servers)
      // console.log("=================================")
      // console.log(ans.servers)

      for (let index = 0; index < ans.servers.length; index++) {

        let percentage = ans.servers[index]/ans.servers.reduce((a, b) => a + b, 0)*100;
        serverLabel.push(`Server ${1+index}==> ( `+percentage.toFixed(2)+"% )")

        serverParts.push(Number(percentage.toFixed(2)));
        
      }

      
      // console.log(serverLabel)
      // console.log(serverParts)
      // console.log(ans.servers.reduce((a, b) => a + b, 0))
      // console.log(ans.servers.reduce((a, b) => a + b, 0),STArray.reduce((a, b) => a + b, 0)) ;
      // console.log(ans.servers.reduce((a, b) => a + b, 0),STArray.reduce((a, b) => a + b, 0)) ;

      setServerLabelMain(serverLabel)
      setServerPartsMain(serverParts)
      setCustomerIDArray(customerLabel)
      setTAArray(TAT)
      setSTArray(ST)
      setWTArray(WT)

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
                        // minvalue="0"
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
                        // minvalue="0"
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
                      ) : (<>
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
                       
                        </>
                      )}
                    </Col>
                    <Col className="pl-1" md="4"> <Button
                          className="btn-fill pull-right ml-4"
                          type="button"
                          variant="info"
                          onClick={(e) => {
                            ShowTableToggle(e)
                          }}
                        >
                          {ShowTable?"Hide Table":"Show Table"}
                        </Button></Col>
                  </Row>

                  {/* <Button block onClick={() => notify("tr","poka")} variant="default">
                    Top Right
                  </Button> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      {
        ShowTable? <Row>
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
                    <th className="border-0">ID</th>
                    <th className="border-0">Inter Arrival</th>
                    <th className="border-0">Arrival</th>
                    <th className="border-0">Service Time</th>
                    <th className="border-0">Start Time</th>
                    <th className="border-0">End Time</th>
                    <th className="border-0">Turnaround Time</th>
                    <th className="border-0">Wait Time</th>
                    <th className="border-0">Server no</th>
                  </tr>
                </thead>
                <tbody>
                  {final.map((obj, key) => (
                    <tr key={key}>
                      <td>C{key+1}</td>
                      <td>{obj.interArrival}</td>
                      <td>{obj.arrival}</td>
                      <td>{obj.serviceTime}</td>
                      <td>{obj.startTime}</td>
                      <td>{obj.endTime}</td>
                      <td>{obj.turnaroundTime}</td>
                      <td>{obj.waitTime}</td>
                      <td>{obj.server}</td>

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
      </Row>:null
      }
       

        {
          final&&final.length>0?
          <Row>
          <Col md="9">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Customer Data Analytics :</Card.Title>
                <p className="card-category">Queue Behaviour</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">

                  {
                    CustomerIDArray&&CustomerIDArray.length>0?
                    <ChartistGraph
                    data={{
                      labels:CustomerIDArray
                      
                      // [
                      //   "9:00AM",
                      //   "12:00AM",
                      //   "3:00PM",
                      //   "6:00PM",
                      //   "9:00PM",
                      //   "12:00PM",
                      //   "3:00AM",
                      //   "6:00AM",
                      // ]
                      
                      ,
                      series: [

                        TAArray,
                        STArray,
                        WTArray,

                        // [787, 385, 490, 492, 554, 586, 698, 695],
                        // [67, 152, 143, 240, 287, 335, 435, 437],
                        // [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: serverPartsMain.reduce((a, b) => a + b, 0),
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                    :null
                  }
                  
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Turnaround Time <i className="fas fa-circle text-danger"></i>
                  Service time <i className="fas fa-circle text-warning"></i>
                  Wait Time
                </div>
                {/* <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          </Col>


          <Col md="3">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Server(s) Statistics</Card.Title>
                <p className="card-category">Server Performance(s)</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  {
                    serverPartsMain&&serverPartsMain.length>0?
                    // <p>{serverParts}</p>
                    <ChartistGraph
                    data={{
                      labels: serverPartsMain,
                      series: serverPartsMain,
                    }}
                    type="Pie"
                  />

                    :null
                  }
                  
                </div>
                <div className="legend">

                {serverLabelMain.map((obj, key) => (

                  <>
                  <i className="fas fa-circle" key={key}></i> {obj}<br/>
                  </>
                ))}
                  {/* <i className="fas fa-circle text-info"></i>Open<br/>
                  <i className="fas fa-circle text-danger"></i>Bounce<br/>
                   <i className="fas fa-circle text-warning"></i>Unsubscribe<br/> */}
                </div>
                {/* <hr></hr> */}
                {/* <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

          :
          null
        }

        

        

        
      </Container>
    </>
  );
}

export default RandomNumber;
