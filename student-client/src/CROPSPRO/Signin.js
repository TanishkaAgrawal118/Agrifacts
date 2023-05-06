import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { SaveSignIngData } from "../CROPSSERVICES/CropService";
export function Login() {
  const [value, setvalue] = useState([]);
  const navigate = useNavigate();
  const handleInput = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await SaveSignIngData(value);
      toast.success("login success.")
      setTimeout(() => {
        navigate('/')
    }, 1500)
    
      console.log(response.data);
    } catch (error) {
     
      console.log(error)
 
    }


  }
  return (
    <>
      {/* <Toaster /> */}
      <Toaster></Toaster>
      <Container>
       
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}></Col>
            <Col md={6}>
            <h3 className="mt-2">Sign In</h3>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Gmail" name="gmail" onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" name="password" onChange={handleInput} />
              </Form.Group>
              <Button type="submit" className="btn-primary" disabled={!value.gmail || !value.password}
              >Login</Button>

              
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}