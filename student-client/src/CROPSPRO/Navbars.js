import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
// const logo = new URL("../AllImages/logoFront.jpg",import.meta.url)

export function NavigationBar() {
  return (
    <div className="navdiv">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><h1 className="navlogo">AgriFacts</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
              <LinkContainer to="/">
                 <Nav.Link><h6 className='text-dark'>HOME</h6></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/crop">
              <Nav.Link>
              <h6 className='text-dark'>CROPS</h6>
             
            </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/weather">
              <Nav.Link>
              <h6 className='text-dark'>WEATHER</h6>
            </Nav.Link>    
              </LinkContainer>
              <LinkContainer to="/signup">
              <Nav.Link>
                  <h6 className="text-center">SIGNUP</h6>
            </Nav.Link>    
              </LinkContainer>
                
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
