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

import Papa from "papaparse";
import * as XLSX from 'xlsx';

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

function DataSource() {
  const [server, setServer] = useState(4);
  const [customers, setCustomers] = useState(10);
  const [fileSource, setFileSource] = useState();
  // console.log("🚀 ~ file: DataSource.js:41 ~ DataSource ~ fileSource", fileSource)
  const [IAMean, setIAMean] = useState(12.45);
  const [STMean, setSTMean] = useState(12.45);

  const [ShowTable, setShowTable] = useState(false);
  
  const [CustomerIDArray, setCustomerIDArray] = useState([]);

  const [STArrayIN, setSTArrayIN] = useState([]);
  const [IAArray, setIAArray] = useState([]);
  // console.log("🚀 ~ file: DataSource.js:42 ~ DataSource ~ IAArray", IAArray)
  const [STArray, setSTArray] = useState([]);
  // console.log("🚀 ~ file: DataSource.js:44 ~ DataSource ~ STArray", STArray)
  const [TAArray, setTAArray] = useState([]);
  // console.log("🚀 ~ file: DataSource.js:50 ~ DataSource ~ TAArray", TAArray)
  const [WTArray, setWTArray] = useState([]);
  // console.log("🚀 ~ file: DataSource.js:52 ~ DataSource ~ WTArray", WTArray)

  const [final, setFinal] = useState([]);
  // console.log("🚀 ~ file: DataSource.js:48 ~ DataSource ~ final", final)
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

  //!=================================================File upload

  const [data, setData] = useState([]);

  function hasNull(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        return true;
      }
    }
    return false;
  }

  function handleFile(e) {
    const file = e.target.files[0];
    // console.log("🚀 ~ file: DataSource.js:113 ~ handleFile ~ file", file.name)
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      const rows = [];
      for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
        const row = [];
        for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
          const cellAddress = XLSX.utils.encode_cell({ r: rowNum, c: colNum });
          const cell = worksheet[cellAddress];
          const cellValue = cell ? cell.v : null;
          row.push(cellValue);
        }

        // rows.push(hasNull(row));
        
        if ( hasNull(row)) {
          
        } else {
          rows.push(row);
          
        }
       
      }
      // console.log(rows.length+1)
      setData(rows);
    };
    reader.readAsBinaryString(file);

   


 
  }
  // console.log(IAArray,STArrayIN)

  

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
    if (server<=0 || server>10) {
      notify("tr", "Severs must be 1 to 10");
    } else {
     


      // console.log(server,customers,IAMean,STMean);

      setIAArray([])
      setSTArray([])
      setSTArrayIN([])
      setTAArray([])
      setWTArray([])
      customerLabel = []

         for (let index = 0; index < data.length; index++) {

      if (index==0) {
        
      } else {
        
        customerLabel.push(`C${index}`)
        console.log(data[index][2]) 
        // IAArray.push(data[index][2])
        // STArrayIN.push(data[index][3])
        
        
      }
      
      
    }
    // console.log("================ I", IAArray)
    // console.log("================ S", STArrayIN)
    
    setIAMean((IAArray.reduce((acc, curr) => acc + curr, 0)/data.length-1).toFixed(2))
    setSTMean((STArrayIN.reduce((acc, curr) => acc + curr, 0)/data.length-1).toFixed(2))
    // console.log("================", IAArray.reduce((acc, curr) => acc + curr, 0))
    // console.log("================", STArrayIN.reduce((acc, curr) => acc + curr, 0))

      
     
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
        serverLabel.push(`Server ${ans.servers.length-index}==> ( `+percentage.toFixed(2)+"% )")

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
                    <Col className="pr-1 typography-line" md="3">
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
                {/* =============================================================================Data Source */}
                    <Col className="pr-1" md="8">
                      <p>Select your data file to simulate</p>

                      {/* <Form.Control
                        placeholder="Mean valueof Inter Arrival (mins)"
                        type="number"
                        width="80%"
                        className="mb-3"
                        value={IAMean}
                        // minvalue="0"
                        onChange={(e) => {
                          setIAMean(e.target.value);
                        }}
                      ></Form.Control> */}


                        <Form.Control 
                        type="file" 
                        size="md" onChange={handleFile}/>
      
                    </Col>
                    {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

                    {/* <Col className="pr-1" md="4">
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
                    </Col> */}

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
                  <Col className="pl-1" md="4"> 
                 </Col>
                    <Col className="pl-1" md="4">
                      {data.length<=0 ? (
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                          disabled
                        >
                          Upload the data sample file
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
                          Start Simulation
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
                <p className="card-category">Inter Arrival Mean : {IAMean} </p>
                <p className="card-category">Service Time Mean : {STMean} </p>
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
                      high: serverPartsMain.reduce((a, b) => a + b, 0)*3,
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

export default DataSource;
