import { Component } from "react";
import { Container, Alert, Card, Row, Col, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { GetGovtSchemes, GetStateSchemes } from "../CROPSSERVICES/CropService";
import './style.css'
export class GovtSchema extends Component {
    constructor() {
        super();
        this.state = {
            formData: [],
            mpData:[],
            rjData:[],
            utData:[],
            puData:[],
            isShow: false,
            isShowData:false,
            isShowRJ:false,
            isShowUt:false,
            isShowPu:false
        }
    }
    handleFetch = async () => {
        const res = await GetGovtSchemes();
        const response = await GetStateSchemes();
        this.setState({ formData: res.data });

        this.setState({ mpData:response.data[0].states})
        this.setState({ rjData:response.data[1].states})
        this.setState({ utData:response.data[2].states})
        this.setState({ puData:response.data[3].states})
    }
    componentDidMount() {

        this.handleFetch();
    }
    render() {
        return (
            <>
 <div className="divgovtschem">
    <Container className="mt-2">
        <Alert className="text-center"><h6>GOVERMENT SCHEMES</h6></Alert>
        </Container>
       <Container>
         <Row>
         <Col lg={3}>
             <Card>
             <Card.Body>
             <Card.Title>
             CENTRAL GOVT. SCHEMES
            </Card.Title>
            <Button className="btn btn-primary mt-2"
            onClick={() => this.setState({ isShow: !this.state.isShow })}
            >
             {this.state.isShow ? "HIDE SCHEMES" : "SHOW SCHEMES"}
            </Button>
            </Card.Body>
             </Card>
            </Col>
             <Col lg={3}>
                <Card>
                     <Card.Body>
                        <Card.Title>
                        STATE GOVT.
                     </Card.Title>
                     <Card.Title>SCHEMES</Card.Title>
                     <DropdownButton id="dropdown-basic-button mt-2" title="SELECT">
                         <Dropdown.Item  onClick={() => this.setState({ isShowData: true , isShowRJ:false, isShowUt:false, isShowPu:false })}>
                             MADHYAPRADESH
                         </Dropdown.Item>
                         <Dropdown.Item onClick={() => this.setState({ isShowRJ: true, isShow:false, isShowUt:false, isShowPu:false})}>
                             RAJASTHAN
                         </Dropdown.Item>
                         <Dropdown.Item onClick={() => this.setState({ isShowUt: true, isShow:false, isShowRJ:false, isShowPu:false})}>
                             UTTARPRADESH
                             </Dropdown.Item>
                             <Dropdown.Item onClick={() => this.setState({ isShowPu: true, isShow:false, isShowRJ:false, isShowUt:false})}>
                                 PUNJAB</Dropdown.Item>
                             <Dropdown.Item></Dropdown.Item>
                             </DropdownButton>
                            </Card.Body>
                                </Card>
                            </Col>
                        </Row>


                    </Container>

                    {this.state.isShow ? (
                        <Container>
                            {
                                this.state.formData.map((data) => {
                                    return (
                                        <>
                                            <Card className="mt-2 cardgovt1">
                                            <Card.Body>
                                             <Card.Title><h3>{data.name}</h3></Card.Title>
                                             <hr></hr>
                                             <Card.Text><h6>Description</h6>{data.description}</Card.Text>
                                             <hr></hr>
                                             <Card.Text><h6>Contact</h6>{data.contact}
                                             </Card.Text>
                                            <hr></hr>
                                            </Card.Body>
                                            </Card>


                                        </>

                                    )
                                }) }

                        </Container>
                    ) : null}

                   {  this.state.isShowData?(
                    <Container className="mt-3">
                          <h5>MADHYAPRADESH SCHEMES</h5>
                           {
                            this.state.mpData.map((emp)=>{
                                    return(
                                        <>
                                        <Card className="mt-2 cardstateone">
                                        <Card.Body>
                                         <Card.Title>
                                             <h3>{emp.name}</h3>
                                             </Card.Title>
                                             <hr></hr>
                                                  <Card.Text><h6>Description</h6>{emp.description}</Card.Text>
                                                    <hr></hr>
                                                    <Card.Text><h6>Contact</h6>{emp.contact}
                                                    </Card.Text>
                                                    <hr></hr>
                                              </Card.Body>
                                           </Card>
                                        </>
                                    )
                                   
                            })

                           }
                             
                          

                    </Container>
                    ):null

                }
                 {  this.state.isShowRJ?(
                    <Container className="mt-3">
                          <h5>RAJASTHAN SCHEMES</h5>
                           {
                            this.state.rjData.map((rajs)=>{
                                    return(
                                        <>
                                           <Card className="mt-2 cardstatetwo">
                                              <Card.Body>
                                                  <Card.Title>
                                                      <h3>{rajs.name}</h3>
                                                  </Card.Title>
                                                  <hr></hr>
                                                  <Card.Text><h6>Description</h6>{rajs.description}</Card.Text>
                                                    <hr></hr>
                                                    <Card.Text><h6>Contact</h6>{rajs.contact}
                                                    </Card.Text>
                                                    <hr></hr>
                                              </Card.Body>
                                           </Card>
                                        </>
                                    )
                                   
                            })

                           }
                             
                          

                    </Container>
                    ):null

                }
                {  this.state.isShowUt?(
                    <Container className="mt-3">
                          <h5>UTTARPRADESH SCHEMES</h5>
                           {
                            this.state.utData.map((uttar)=>{
                                    return(
                                        <>
                                           <Card className="mt-2 cardstatethird">
                                              <Card.Body>
                                                  <Card.Title>
                                                      <h3>{uttar.name}</h3>
                                                  </Card.Title>
                                                  <hr></hr>
                                                  <Card.Text><h6>Description</h6>{uttar.description}</Card.Text>
                                                    <hr></hr>
                                                    <Card.Text><h6>Contact</h6>{uttar.contact}
                                                    </Card.Text>
                                                    <hr></hr>
                                              </Card.Body>
                                           </Card>
                                        </>
                                    )
                                   
                            })

                           }
                             
                          

                    </Container>
                    ):null

                }
                {  this.state.isShowPu?(
                    <Container className="mt-3">
                          <h5>PUNJAB SCHEMES</h5>
                           {
                            this.state.puData.map((punj)=>{
                                    return(
                                        <>
                                           <Card className="mt-2 cardstatefourth">
                                              <Card.Body>
                                                  <Card.Title>
                                                      <h3>{punj.name}</h3>
                                                  </Card.Title>
                                                  <hr></hr>
                                                  <Card.Text><h6>Description</h6>{punj.description}</Card.Text>
                                                    <hr></hr>
                                                    <Card.Text><h6>Contact</h6>{punj.contact}
                                                    </Card.Text>
                                                    <hr></hr>
                                              </Card.Body>
                                           </Card>
                                        </>
                                    )
                                   
                            })

                           }
                             
                          

                    </Container>
                    ):null

                }

                </div>
            </>
        )



    }
}