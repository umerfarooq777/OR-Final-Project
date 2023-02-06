import React, { useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import NotificationAlert from "react-notification-alert";
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
  FloatingLabel,
  FormSelect,
} from "react-bootstrap";
import serverGif from "assets/img/Server.gif";
import { mmc_calculation } from "assets/formulae/MMC";
import { gg1_calculation } from "assets/formulae/GG1";
import { ggc_calculation } from "assets/formulae/GGC";
var P, Lq, Wq, Ws, PIT, L, c;

function QueueingSimulation() {
  const [server, setServer] = useState(1);

  //Inter Arrival(IA)
  const [IAType, setIAType] = useState("");
  const [IAMean, setIAMean] = useState("");
  const [IAVariance, setIAVariance] = useState("");
  const [IAVarianceMax, setIAVarianceMax] = useState("");
  const [IAVarianceMin, setIAVarianceMin] = useState("");

  //Inter Arrival(ST)
  const [STType, setSTType] = useState("");
  const [STMean, setSTMean] = useState("");
  const [STVariance, setSTVariance] = useState("");
  const [STVarianceMax, setSTVarianceMax] = useState("");
  const [STVarianceMin, setSTVarianceMin] = useState("");

  const [LqCal, setLqCal] = useState();
  const [WqCal, setWqCal] = useState();
  const [WsCal, setWsCal] = useState();
  const [LCal, setLCal] = useState();
  const [PITCal, setPITCal] = useState();


  var IAVarianceCal,STVarianceCal;

  IAVariance&&IAVariance>=0?(
    IAVarianceCal=IAVariance
  ):(
    IAVarianceCal = ((IAVarianceMax - IAVarianceMin)**2 / 12).toFixed(4)
  )
  
  STVariance&&STVariance>=0?(
    STVarianceCal=STVariance
  ):(
    STVarianceCal = ((STVarianceMax - STVarianceMin)**2 / 12).toFixed(4)
  )


  
  const units = "min(s)";

  // React.useEffect(() => {
  //   function VarianceCalc(){
  //     IAVariance?(
  //       IAVarianceCal==IAVariance
  //     ):(
  //       IAVarianceCal = (IAVarianceMax - IAVarianceMin)**2 / 12
  //     )
      
  //     STVariance?(
  //       STVarianceCal==STVariance
  //     ):(
  //       STVarianceCal = (STVarianceMax - STVarianceMin)**2 / 12
  //     )
  //   }
  //   VarianceCalc()
  // }, []);

  const Calculate1 = (e) => {
    e.preventDefault();
    if (IAMean == "" || STMean == "") {
      notify("tr", "Input fields can't be empty");
    } else {
      var lambda = 1 / IAMean;
      var meu = 1 / STMean;

      P = lambda / meu;

      if (server == 1) {
        //==============================================Lq
        Lq = P ** 2 / (1 - P);
        // console.log("🚀 ~ file: queueingSimulation.js:63 ~ Calculate1 ~ Lq", Lq)
        setLqCal(parseFloat(Lq.toFixed(4)));

        //==============================================Wq
        Wq = Lq / lambda;
        // console.log("🚀 ~ file: queueingSimulation.js:69 ~ Calculate1 ~ Wq", Wq)
        setWqCal(parseFloat(Wq.toFixed(4)));

        //==============================================Ws
        Ws = Wq + 1 / meu;
        // console.log("🚀 ~ file: queueingSimulation.js:75 ~ Calculate1 ~ Ws", Ws)
        setWsCal(parseFloat(Ws.toFixed(4)));
        //==============================================L
        L = Ws * lambda;
        // console.log("🚀 ~ file: queueingSimulation.js:75 ~ Calculate1 ~ Ws", Ws)
        setLCal(parseFloat(L.toFixed(4)));
        //==============================================PIT
        PIT = 1 - P;
        // console.log("🚀 ~ file: queueingSimulation.js:75 ~ Calculate1 ~ Ws", Ws)
        setPITCal(parseFloat(PIT.toFixed(4)));
      } else {
        var ans = mmc_calculation(P, IAMean, STMean, server);
        setLqCal(ans.lq.toFixed(4));
        setWqCal(ans.wq.toFixed(4));
        setWsCal(ans.w.toFixed(4));
        setLCal(ans.l.toFixed(4));
        setPITCal(ans.idle.toFixed(4));
      }
    }
  };

  const Calculate2 = (e) => {
    e.preventDefault();
    if (
      IAMean == "" ||
      STMean == "" ||
      STVarianceMax == "" ||
      STVarianceMin == ""
    ) {
      notify("tr", "Input fields can't be empty");
    } else {
      var lambda = 1 / IAMean;
      var meu = 1 / STMean;

      P = lambda / meu;
      // console.log("🚀 ~ file: queueingSimulation.js:125 ~ Calculate2 ~ P", P,STVarianceCal)

      if (server==1) {
         //==============================================Lq

      Lq = (lambda ** 2 * STVarianceCal + P ** 2) / (2 * (1 - P));
      // console.log("🚀 ~ file: queueingSimulation.js:63 ~ Calculate1 ~ Lq", Lq)
      setLqCal(parseFloat(Lq.toFixed(4)));

      //==============================================Wq
      Wq = Lq / lambda;
      // console.log("🚀 ~ file: queueingSimulation.js:69 ~ Calculate1 ~ Wq", Wq)
      setWqCal(parseFloat(Wq.toFixed(4)));

      //==============================================Ws
      Ws = Wq + 1 / meu;
      // console.log("🚀 ~ file: queueingSimulation.js:75 ~ Calculate1 ~ Ws", Ws)
      setWsCal(parseFloat(Ws.toFixed(4)));
      //==============================================L
      L = Ws * lambda;
      // console.log("🚀 ~ file: queueingSimulation.js:75 ~ Calculate1 ~ Ws", Ws)
      setLCal(parseFloat(L.toFixed(4)));
      //==============================================PIT
      PIT = 1 - P;
      // console.log("🚀 ~ file: queueingSimulation.js:75 ~ Calculate1 ~ Ws", Ws)
      setPITCal(parseFloat(PIT.toFixed(4)));
        
      } else {
        
      }

      var ans = ggc_calculation(
        P,
        lambda,
        meu,
        server,
        IAType,
        STVarianceCal,
        IAVarianceCal
      );
      setLqCal(ans.lq.toFixed(4));
      setWqCal(ans.wq.toFixed(4));
      setWsCal(ans.w.toFixed(4));
      setLCal(ans.l.toFixed(4));
      setPITCal(ans.idle.toFixed(4));


     
    }
  };

  const Calculate3 = (e) => {
    e.preventDefault();
    if (
      IAMean == "" ||
      STMean == "" ||
      IAVarianceCal>0?null:
      (IAVariance==""||
      IAVarianceMax == "" ||
      IAVarianceMin == "")
      ||

      STVarianceCal>0?null:
      (STVariance==""||
      STVarianceMax == "" ||
      STVarianceMin == "")
    ) {
      notify("tr", "Input fields can't be empty");
    } else {
      var lambda = 1 / IAMean;
      var meu = 1 / STMean;

      P = lambda / meu;

      if (server == 1) {
        var ans = gg1_calculation(P, lambda, meu, STVarianceCal, IAVarianceCal);
        setLqCal(ans.lq.toFixed(4));
        setWqCal(ans.wq.toFixed(4));
        setWsCal(ans.w.toFixed(4));
        setLCal(ans.l.toFixed(4));
        setPITCal(ans.idle.toFixed(4));
      } else {
        var ans = ggc_calculation(
          P,
          lambda,
          meu,
          server,
          IAType,
          STVarianceCal,
          IAVarianceCal
        );
        setLqCal(ans.lq.toFixed(4));
        setWqCal(ans.wq.toFixed(4));
        setWsCal(ans.w.toFixed(4));
        setLCal(ans.l.toFixed(4));
        setPITCal(ans.idle.toFixed(4));
      }
    }
  };

  const interArrivalData = {
    type: IAType,
    meanLamda: IAMean,
    variance: IAVarianceCal,
  };

  const serviceTimeData = {
    type: STType,
    meanMue: STMean,
    variance: STVarianceCal,
  };

  // console.log(server,serviceTimeData,interArrivalData)

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
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                {/* <Card.Title as="h4">Queue Configuration:</Card.Title> */}
              </Card.Header>
              <Card.Body>
                <Form>
                  {/* /====================ROW 1/ */}

                  <Row>
                    <Col className="pr-1 typography-line" md="5">
                      <p className="serverText">
                        {" "}
                        <i className="nc-icon nc-layers-3 "></i> Server(s)
                      </p>
                      <input
                        type="number"
                        className="serverInput"
                        min="1"
                        value={server}
                        onChange={(e) => {
                          setServer(e.target.value);
                        }}
                      ></input>
                    </Col>

                    <Col className="px-1" md="7">
                      <Row>
                        <Col className="px-1" md="5"></Col>
                        <Col md="7">
                          <div>
                            <img src={serverGif} />
                          </div>
                        </Col>
                        {/* <Col md="7">
                    <Card className="card-stats">
                      <Card.Body>
                        <Row>
                          <Col >
                            <div className="icon-big text-center icon-warning">
                              {IAType==''?"_":IAType=="exponential"?"M":"G"}\{STType==''?" _":STType=="exponential"?"M":"G"}\{server}
                            </div>
                          </Col>
                          
                        </Row>
                      </Card.Body>
                      <Card.Footer>
                        <hr></hr>
                        <div className="stats">
                          Simulation
                        </div>
                      </Card.Footer>
                    </Card>
                    </Col> */}
                      </Row>
                    </Col>
                  </Row>
                  {/* /====================ROW 2/ */}
                  <Row>
                    <Col className="pr-1" md="5">
                      <p className="labelHeading">
                        {" "}
                        <i className="nc-icon nc-notes "></i> Inter Arrival
                        Distribution
                      </p>
                      <Form.Select
                        name="interArrivalDistribution"
                        className="mb-3 customSelect"
                        value={IAType}
                        onChange={(e) => {
                          setIAType(e.target.value);
                        }}
                      >
                        <option value="">--- None ---</option>

                        {STType == "exponential" ? (
                          <option value="exponential">Exponential</option>
                        ) : (
                          <>
                            <option value="exponential">Exponential</option>
                            <option value="gamma">Gamma</option>
                            <option value="normal">Normal</option>
                            <option value="uniform">Uniform</option>
                          </>
                        )}
                      </Form.Select>
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

                      {IAType == "exponential" || IAType == "" ? null : (
                        <>
                          <p>
                            Variance of Inter Arrival ( &sigma;<sup>2</sup>
                            <sub>a</sub> ) :{" "}
                            <span className="text-info">
                              {IAVarianceCal>0? "("+ IAVarianceCal+ ")":null}
                            </span>
                            {/* <span className="text-info">
                              {IAVariance || (IAVarianceMax && IAVarianceMin)
                                ? "(" + IAVarianceCal? IAVarianceCal.toFixed(4):null + ")"
                                : null}
                            </span> */}
                          </p>

                          {
                            IAVarianceMax&&IAVarianceMin?null:

                          <Row>
                          <Col md="12">
                              <Form.Control
                                placeholder="IA Variance"
                                type="number"
                                width="80%"
                                value={IAVariance}
                                onChange={(e) => {
                                  setIAVariance(e.target.value);
                                }}
                              ></Form.Control>
                            </Col>
                            </Row>
                          }

                            {IAVariance?null:<Row>
                            <Col md="6">
                              <Form.Control
                                placeholder="Maximum Value"
                                type="number"
                                width="80%"
                                value={IAVarianceMax}
                                onChange={(e) => {
                                  setIAVarianceMax(e.target.value);
                                }}
                              ></Form.Control>
                            </Col>
                            <Col md="6">
                              <Form.Control
                                placeholder="Minimum Value"
                                type="number"
                                width="80%"
                                value={IAVarianceMin}
                                onChange={(e) => {
                                  setIAVarianceMin(e.target.value);
                                }}
                              ></Form.Control>
                            </Col>
                          </Row>}
                            
                        </>
                      )}
                    </Col>
                    <Col className="pl-1" md="1"></Col>
                    <Col className="pr-1" md="5">
                      <p className="labelHeading">
                        {" "}
                        <i className="nc-icon nc-notes"></i> Service Time
                        Distribution
                      </p>
                      <Form.Select
                        name="serviceTimeDistribution"
                        className="mb-3 customSelect"
                        value={STType}
                        onChange={(e) => {
                          setSTType(e.target.value);
                        }}
                      >
                        <option value="">--- None ---</option>
                        {IAType == "exponential" || IAType == "" ? (
                          <option value="exponential">Exponential</option>
                        ) : null}
                        <option value="gamma">Gamma</option>
                        <option value="normal">Normal</option>
                        <option value="uniform">Uniform</option>
                      </Form.Select>
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

                      {STType == "exponential" || STType == "" ? null : (
                        <>
                          <p>
                            Variance of Service Time ( &sigma;<sup>2</sup>
                            <sub>s</sub> ) :{" "}
                            <span className="text-info">
                            {STVarianceCal>0? "("+ STVarianceCal+ ")":null}
                            </span>
                            {/* <span className="text-info">
                              {STVarianceMax && STVarianceMin
                                ? "(" + STVarianceCal.toFixed(4) + ")"
                                : null}
                            </span> */}
                          </p>

                          {
                            STVarianceMax&&STVarianceMin?null:
                            <Row>
                          <Col md="12">
                              <Form.Control
                                placeholder="ST Variance"
                                type="number"
                                width="80%"
                                value={STVariance}
                                onChange={(e) => {
                                  setSTVariance(e.target.value);
                                }}
                              ></Form.Control>
                            </Col>
                            </Row>
                          }
                          

                            {
                              STVariance?null:
                              <Row>
                              <Col md="6">
                                <Form.Control
                                  placeholder="Maximum Value"
                                  type="number"
                                  width="80%"
                                  value={STVarianceMax}
                                  onChange={(e) => {
                                    setSTVarianceMax(e.target.value);
                                  }}
                                ></Form.Control>
                              </Col>
                              <Col md="6">
                                <Form.Control
                                  placeholder="Minimum Value"
                                  type="number"
                                  width="80%"
                                  value={STVarianceMin}
                                  onChange={(e) => {
                                    setSTVarianceMin(e.target.value);
                                  }}
                                ></Form.Control>
                              </Col>
                            </Row>
                            }
                           
                        </>
                      )}
                    </Col>{" "}
                    <Col className="pl-1" md="1"></Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="4"></Col>
                    <Col className="pl-1" md="4">
                      {IAType == "" || STType == "" ? (
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                          disabled
                        >
                          Please Select Distribution
                        </Button>
                      ) : IAType == "exponential" && STType == "exponential" ? (
                        <Button
                          className="btn-fill pull-right"
                          variant="info"
                          onClick={(e) => {
                            Calculate1(e);
                          }}
                        >
                          Simulation 1 [{" "}
                          {IAType == ""
                            ? "_"
                            : IAType == "exponential"
                            ? "M"
                            : "G"}
                          \
                          {STType == ""
                            ? " _"
                            : STType == "exponential"
                            ? "M"
                            : "G"}
                          \{server} ]
                        </Button>
                      ) : IAType == "exponential" &&
                        STType !== "exponential" ? (
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                          onClick={(e) => {
                            Calculate2(e);
                          }}
                        >
                          Simulation 2 [{" "}
                          {IAType == ""
                            ? "_"
                            : IAType == "exponential"
                            ? "M"
                            : "G"}
                          \
                          {STType == ""
                            ? " _"
                            : STType == "exponential"
                            ? "M"
                            : "G"}
                          \{server} ]
                        </Button>
                      ) : (
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                          onClick={(e) => {
                            Calculate3(e);
                          }}
                        >
                          Simulation 3 [{" "}
                          {IAType == ""
                            ? "_"
                            : IAType == "exponential"
                            ? "M"
                            : "G"}
                          \
                          {STType == ""
                            ? " _"
                            : STType == "exponential"
                            ? "M"
                            : "G"}
                          \{server} ]
                        </Button>
                      )}
                    </Col>
                    <Col className="pl-1" md="4">
                      <div className="clearfix"></div>
                    </Col>
                  </Row>

                  {/* <Button block onClick={() => notify("tr","poka")} variant="default">
                    Top Right
                  </Button> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* //!=============================================================================== */}
          <Col md="4">
            <Row className="mt-2">
              <Col md="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="7">
                        <h1 className="answer-heading">Lq</h1>
                      </Col>

                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-single-02 text-warning"></i>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <Card.Title as="h4">
                        {LqCal ? LqCal : "--"}
                        <span className="units">{units}</span>
                      </Card.Title>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="7">
                        <h1 className="answer-heading">Wq</h1>
                      </Col>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-watch-time text-success"></i>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <Card.Title as="h4">
                        {WqCal ? WqCal : "--"}
                        <span className="units">{units}</span>
                      </Card.Title>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="7">
                        <h1 className="answer-heading">Ws</h1>
                      </Col>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-time-alarm text-danger"></i>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <Card.Title as="h4">
                        {WsCal ? WsCal : "--"}
                        <span className="units">{units}</span>
                      </Card.Title>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="7">
                        <h1 className="answer-heading">L</h1>
                      </Col>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-settings-gear-64 text-info"></i>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <Card.Title as="h4">
                        {LCal ? LCal : "--"}
                        <span className="units">{units}</span>
                      </Card.Title>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="7">
                        <h1 className="answer-heading">
                          Propotion of server ideal time:{" "}
                        </h1>
                      </Col>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-bulb-63 text-primary"></i>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <Card.Title as="h4">
                        {PITCal ? PITCal : "--"}
                        <span className="units">{units}</span>
                      </Card.Title>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default QueueingSimulation;
