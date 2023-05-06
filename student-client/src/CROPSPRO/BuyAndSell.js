import { Component } from "react";
import { TextField } from "@mui/material";
import { Alert, Container, Button, Row, Col, Card, NavDropdown, Navbar, Nav, Table } from "react-bootstrap";
import { FetchLandData, FetchSellData, SaveLanData, SavesellData } from "../CROPSSERVICES/CropService.js";
export class BuyAndSellTools extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            LandData: {},
            gettools: [],
            saveLandData: {},
            fetchLandData: [],
            isShow: false,
            isShowBuy: false,
            isDatabuy: false,
            isDetails: false,
            isLand: false,
            isfetchlanddata: false
        }
    }

    handleChange = (event) => {
        if (event.target.type === 'file') {
            if (event.target.files.length > 0) {
                const formData = new FormData();
                formData.append('image', event.target.files[0]);

                for (let key of Object.keys(this.state.formData)) {
                    formData.append(key, this.state.formData[key]);
                }

                this.setState({ formData });
            } else {
                this.setState({ formData: { ...this.state.formData, image: null } });
            }
        } else {
            console.log(event.target.value);
            this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } });
        }
    }
    handleChangeLand = (event) => {
        // console.log(event.target.value)
        this.setState({ LandData: { ...this.state.LandData, [event.target.name]: event.target.value } })
        // console.log(event.target.name)
    }
    handleSubmitLand = async (event) => {

        event.preventDefault();

        const res = await SaveLanData(this.state.LandData);
        console.log(res.data)


    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await SavesellData(this.state.formData);

    }
    componentDidMount() {
        this.handleFetch();
        this.handleFetchland();
    }


    handleFetch = async () => {
        const response = await FetchSellData();
        this.setState({ gettools: response.data });
    }
    handleFetchland = async () => {
        const res = await FetchLandData();
        this.setState({ fetchLandData: res.data })
    }

    render() {
        return (
            <>

                <Container className="mt-3">
                    <Alert className="text-center"><h5>Buy And Sell Old Reliable tools and lands</h5></Alert>
                </Container>
                <Container className="mt-2">
                    <h1>DETAILS</h1>
                    <hr></hr>
                </Container>
                <Container className="mb-2 mt-2">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="OldTools">
                                        <NavDropdown.Item onClick={() => {
                                            this.setState({ isShow: !this.state.isShow });
                                            this.setState({ isShowBuy: false });
                                        }}>Sell</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            this.setState({ isShowBuy: !this.state.isShowBuy })
                                            this.setState({ isDatabuy: false })
                                            this.setState({ isDeatails: false })
                                            this.setState({ isShow: false })
                                            this.setState({ isfetchlanddata: false })
                                        }}>
                                            Buy
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <Nav.Link className="ms-2" onClick={() => {
                                        this.setState({ isLand: !this.state.isLand });
                                        this.setState({ isDatabuy: false })
                                        this.setState({ isDeatails: false })
                                        this.setState({ isShow: false })
                                        this.setState({ isShowBuy: false })
                                        this.setState({ isfetchlanddata: false })
                                    }}>Land
                                    </Nav.Link>
                                    <Nav.Link className="ms-2" onClick={() => {
                                        this.setState({ isfetchlanddata: !this.state.isfetchlanddata });
                                        this.setState({ isDatabuy: false })
                                        this.setState({ isDeatails: false })
                                        this.setState({ isShow: false })
                                        this.setState({ isShowBuy: false })
                                        this.setState({ isLand: false })
                                    }}>RentList
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
                {
                    this.state.isShow ? (
                        <div className="buydiv">
                            <div className="containbuy">
                                <Container className="mt-3">
                                    <h3 className="text-center mt-2">SELL TOOLS</h3>
                                    <div>
                                        <form onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col lg={4}>
                                                    <TextField className="mt-2 mb-2" type="text" label="toolname" name="toolname" fullWidth onChange={this.handleChange}></TextField>
                                                </Col>
                                                <Col lg={4}>
                                                    <TextField className="mt-2 mb-2" type="text" label="manufacture year" name="manufactyear" fullWidth onChange={this.handleChange}></TextField>
                                                </Col>

                                                <Col lg={4}>
                                                    <TextField className="mt-2 mb-2" type="text" label="model" name="model" fullWidth onChange={this.handleChange}></TextField>
                                                </Col>
                                                <Col lg={4}>
                                                    <TextField className="mt-2 mb-2" type="number" label="price" name="price" fullWidth onChange={this.handleChange}></TextField>
                                                </Col>
                                                <Col lg={4}>
                                                    <TextField className="mt-2 mb-2" type="text" label="ownername" name="ownername" fullWidth onChange={this.handleChange}></TextField>
                                                </Col>
                                                <Col lg={4}>
                                                    <TextField className="mt-2 mb-2" type="text" label="contact" name="contact" fullWidth onChange={this.handleChange}></TextField>
                                                </Col>
                                                <Col lg={4}>
                                                    <input type="file" name="image" onChange={this.handleChange} />
                                                </Col>
                                            </Row>
                                            <Button className="mt-2 mb-2 btn-danger" type="submit">Submit</Button>
                                        </form>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    ) : null
                }
                {this.state.isShowBuy ? (
                    <div className="mt-3">
                        <Container className="pt-3">
                            <h3 className="text-center  buytool">BUY TOOLS</h3>
                            <Row>
                                {
                                    this.state.gettools.map((data) => {
                                        return (
                                            <>
                                                <Col lg={3}>
                                                    <Card className="buycard">
                                                        <Card.Img src={data.image} className="p-2"></Card.Img>
                                                        <Card.Body>
                                                            <Card.Text>
                                                                <h3>{data.toolname}</h3>
                                                                <h6>{data.price}</h6>
                                                                <Button className="btn btn-sm bg-primary" onClick={() => {
                                                                    this.setState({ isDatabuy: !this.state.isDatabuy }
                                                                        , { isDetails: !this.state.isDetails })
                                                                }}>Contact</Button>
                                                                <Button className="btn btn-sm bg-primary ms-2" onClick={() => {
                                                                    this.setState({ isDetails: !this.state.isDetails }
                                                                    )
                                                                }}>Details</Button>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                {
                                                                    this.state.isDatabuy ? (
                                                                        <>
                                                                            <div>
                                                                                <p>Seller {data.ownername}</p>
                                                                                <p>Mob. {data.contact}</p>
                                                                            </div>
                                                                        </>
                                                                    ) : null

                                                                }
                                                            </Card.Text>
                                                            <Card.Text>
                                                                {
                                                                    this.state.isDetails ? (
                                                                        <>
                                                                            <div>
                                                                                <p>Model. {data.model}</p>
                                                                                <p>Year {data.manufactyear}</p>
                                                                            </div>
                                                                        </>
                                                                    ) : null

                                                                }
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </>
                                        )

                                    })

                                }
                            </Row>
                        </Container>
                    </div>
                ) : null

                }
                {this.state.isLand ? (

                    <Container className="mt-3">

                        <Row>
                            <Col lg={3}></Col>
                            <Col lg={6}>
                                <form onSubmit={this.handleSubmitLand}>
                                    <h3>Register</h3>
                                    <TextField className="mt-2 mb-2" type="text" label="Totalland acres" name="totalland" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="text" label="Soil" name="soil" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="text" label="duration" name="duration" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="text" label="sourceofwater" name="sourceofwater" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="number" label="rentamount" name="rentamount" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="text" label="ownername" name="ownername" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="text" label="majorcrops" name="majorcrops" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <TextField className="mt-2 mb-2" type="text" label="contact" name="contact" fullWidth onChange={this.handleChangeLand}></TextField>
                                    <Button type="submit mt-2 mb-2" >Submit</Button>
                                </form>
                            </Col>
                            <Col lg={3}></Col>
                        </Row>
                    </Container>
                ) : null

                }
                {this.state.isfetchlanddata ? (
                    <>
                        <Container className="mt-3">
                            <h3 className="text-center mt-3">Land Available On Rent</h3>

                        </Container>
                        <Container>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th className="text-center">S.NO</th>
                                        <th className="text-center">Owner Name</th>
                                        <th className="text-center">Plot size(acres)</th>
                                        <th className="text-center">Duration</th>
                                        <th className="text-center">sources of water</th>
                                        <th className="text-center">MajorCrops</th>
                                        <th className="text-center">Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.fetchLandData.map((crop, index) => {
                                        return (
                                            <tr key={crop._id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td className="text-center">{crop.ownername}</td>
                                                <td className="text-center">{crop.totalland}</td>
                                                <td className="text-center">{crop.duration}</td>
                                                <td className="text-center">{crop.sourceofwater}</td>
                                                <td className="text-center">{crop.majorcrops}</td>
                                                <td className="text-center">{crop.rentamount}</td>
                                                <td className="text-center">{crop.contact}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Container>
                    </>
                ) : null

                }

            </>
        )
    }
}