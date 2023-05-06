import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { SaveSignup } from "../CROPSSERVICES/CropService";
import './style.css'
export function SignUp() {
    const [value, setvalue] = useState([]);
    // const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const handleInput = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (value.password !== value.confirm) {
                toast.error("password do not match")
            }
              const response = await SaveSignup(value)
              console.log(response.data)
            toast.success("signup success.")
            setTimeout(() => {
                navigate('/')
            }, 1500)


        } catch (error) {
        
            console.log(error)
        }

    }

    return (
        <>
            <Toaster></Toaster>
              <div className="signupdiv">
                     <div className="signupdivtwo">
            <Container>   
                <Form onSubmit={handleSubmit}>
                    <Row>
                           
                        <Col md={6} className="offset-md-3">
                             <h1 className="text-center pt-2">Sign Up</h1>
                            <Form.Group className="mb-2">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" onChange={handleInput} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" name="number" onChange={handleInput} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Gmail" name="gmail" onChange={handleInput} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" name="password" onChange={handleInput} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="password" name="confirm" onChange={handleInput} />
                            </Form.Group>
                            <Button type="submit" className="btn-primary" disabled={!value.name || !value.number || !value.gmail || !value.password}>Submit
                            </Button>
                            <p className="pt-2">
                                Already registered? <Link to="/login">login</Link>
                            </p>
                        </Col>
                    </Row>



                </Form>

            </Container>
            </div>
            
            </div>
        </>
    )
}