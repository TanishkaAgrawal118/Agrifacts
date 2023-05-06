import { Component } from "react";
import { Alert, Container, Table, Dropdown, DropdownButton } from "react-bootstrap";
import { GetCropsData } from "../CROPSSERVICES/CropService";

export class Crop extends Component {
    constructor() {
        super();
        this.state = {
            formData: [],
            isShow: false,
            isShowRed: false,
            isShowLat: false,

        }

    }
    handleFetch = async () => {
        const response = await GetCropsData();
        console.log(response.data[0].crops[0].variety);
        this.setState({ formData: response.data[0].crops[0].variety });
    }


    componentDidMount() {
        this.handleFetch();
    }

    render() {
        return (
            <>
                <Container className="mt-2">
                    <Alert className="text-center">Welcome To Forming App</Alert>
                </Container>
                <Container className="mt-2">
                    <h1>CROPS DETAILS</h1>
                    <hr></hr>
                </Container>
                <Container className="mb-2 mt-2">
                    <DropdownButton id="dropdown-basic-button" title="SELECT SOILS">
                        <Dropdown.Item onClick={() => this.setState({ isShow: true, isShowLat: false, isShowRed: false })}>
                            Black
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({ isShow: false, isShowLat: false, isShowRed: true })}>
                            Red
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({ isShow: false, isShowLat: true, isShowRed:false })}>
                            Laterite
                        </Dropdown.Item>
                  
                    </DropdownButton>
                </Container>

                {this.state.isShow ? (
                    <Container className="mt-3">
                        <h3 className="text-center">Information About Black Soil</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th className="text-center">S.NO</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Duration/Days</th>
                                    <th className="text-center">Weather/Centigrate</th>
                                    <th className="text-center">Uses</th>
                                    <th className="text-center">Production State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.formData.map((crop, index) => {
                                    return (
                                        <tr key={crop._id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{crop.name}</td>
                                            <td className="text-center">{crop.duration}</td>
                                            <td className="text-center">{crop.wheather}</td>
                                            <td className="text-center">{crop.category}</td>
                                            <td className="text-center">{crop.Availity}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </Table>
                    </Container>
                ) : null}
                {this.state.isShowRed ? (
                    <Container className="mt-3">
                        <h3 className="text-center">Information About Red Soil</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th className="text-center">S.NO</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Duration/Days</th>
                                    <th className="text-center">Whether/Temp</th>
                                    <th className="text-center">Category</th>
                                    <th className="text-center">Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.formData.map((crop, index) => {
                                    return (
                                        <tr key={crop._id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{crop.name}</td>
                                            <td className="text-center">{crop.duration}</td>
                                            <td className="text-center">{crop.wheather}</td>
                                            <td className="text-center">{crop.category}</td>
                                            <td className="text-center">{crop.Availity}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </Table>
                    </Container>
                ) : null}
                {this.state.isShowLat ? (
                    <Container className="mt-3">
                        <h3 className="text-center">Information About Laterite Soil</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th className="text-center">S.NO</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Duration/Days</th>
                                    <th className="text-center">Whether/Temp</th>
                                    <th className="text-center">Category</th>
                                    <th className="text-center">Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.formData.map((crop, index) => {
                                    return (
                                        <tr key={crop._id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{crop.name}</td>
                                            <td className="text-center">{crop.duration}</td>
                                            <td className="text-center">{crop.wheather}</td>
                                            <td className="text-center">{crop.category}</td>
                                            <td className="text-center">{crop.Availity}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </Table>
                    </Container>
                ) : null}

            </>
        )
    }
} 
