import { Box, TextField } from "@mui/material";
import { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { SaveExpertsData } from "../CROPSSERVICES/CropService";

export class ExpertData extends Component {
    constructor() {
        super();
        this.state = {
            formdata: {}
        }

    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ formdata: { ...this.state.formdata, [event.target.name]: event.target.value } })
        console.log(event.target.name)

    }
    handleSubmit =async (event) => {
        event.preventDefault();
        await SaveExpertsData(this.state.formdata);

    }


    render() {
        return (
            <>
                <Container className="mt-4">
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <h3>Let Our Experts Help You</h3>
                            <h3>Grow Your Farming.</h3>
                        
                             <p>Submit your details below and our  team will contact you
                             </p>
                               

                            <Box
                                sx={{
                                    width: 300,
                                    maxWidth: '100%',
                                }}
                            >
                                <form onSubmit={this.handleSubmit}>
                                    <TextField fullWidth   type="text" label="Name" className="mt-3" onChange={this.handleChange} />
                                    <TextField fullWidth type="number" label="Number" className="mt-3" onChange={this.handleChange} />
                                    <TextField fullWidth type="email" label="Email" className="mt-3" onChange={this.handleChange} />
                                    <Button className="btn-primary mt-2" varaint="danger">Submit</Button>
                                    <p className="mt-1">Your data secure with us

                                    </p>
                                </form>


                            </Box>






                        </Col>
                        <Col lg={3}></Col>
                    </Row>


                </Container>

            </>
        )
    }

}