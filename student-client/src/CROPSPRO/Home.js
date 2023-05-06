import React from "react";
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css';
const Picture = new URL('../AllImages/pesticides.jpg',import.meta.url);
const SecondPicture= new URL('../AllImages/image2.jpg',import.meta.url)
const IRRIGATION = new URL('../AllImages/irrigationlogo.jpg',import.meta.url)
const  Harvesting = new URL('../AllImages/harvesting.jpg',import.meta.url)
const WEATHER = new URL('../AllImages/weatherlogo.jpg',import.meta.url)
const Govtlogo= new URL('../AllImages/GovtYojana.jpg',import.meta.url);
const Warehouse = new URL('../AllImages/AgriCs.jpg',import.meta.url);
const BuySell = new URL('../AllImages/BuySell.jpg',import.meta.url);
const calculator =new URL('../AllImages/calci.jpg',import.meta.url);
const Etlogo = new URL('../AllImages/ETLOGO.jpg',import.meta.url);
export function Home(){
  const navigate = useNavigate()
  const containerRef = React.createRef();
  const  handleExploreClick = () => {
   window.scrollTo({
       top: this.containerRef.current.offsetTop,
       behavior: 'smooth'
   });
}
  
          return(
            <>
                 <>
                 <div className="div1">
                  <div className="division">
                      <div>
                      <h1 className="head1">Agriculture and</h1>
                      <h1 className="head2">Farming</h1>
                       <Button className="btn btn-lg  btn1" onClick={handleExploreClick}>Learn More</Button>
                      </div>
                        
                  </div>
                 
                  
               <div className="division2">
                  <Container ref={containerRef}>
                  {/* <h3 classname="ms-5 text-center mt-5 text-light">CROP DETAILS</h3> */}
                  </Container>
               
               <Container className="contains pt-4">
                   <Row>
                   <Col lg={3}>
                       <Card className="mb-2">
                        <Card.Img varaint="top" src={SecondPicture} className="p-2"/>
                        <Card.Body>
                             
                           <Card.Title>CROPS INFORMATION</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={() => navigate("/crop")}>MORE INFORMATION</Button>

                        </Card.Body>
                       </Card>
                    </Col>
                   
                    <Col lg={3}>
                    <Card className="mb-1">
                           <Card.Img src={Picture} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>CROPS PESTICIDES</Card.Title>
                           <Button  className="mt-2 btn-sm" onClick={()=>navigate("/pestiside")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                    <Card.Img src={Harvesting} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>AGRICULTURE TOOLS</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/tools")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                        <Card.Body>
                           <Card.Img src={WEATHER} className="p-2"></Card.Img>
                           <Card.Title className="mt-2">WEATHER</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/weather")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                     <Card.Img src={Warehouse} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>COLD STORAGE</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/coldstorage")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                   
                    <Col lg={3}>
                    <Card>
                    <Card.Img src={IRRIGATION} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>CROPS IRRIGATION</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/irrigation")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                        <Card.Img src={BuySell} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>BUY/SELL/RENT</Card.Title>

                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/buysell")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                       <Card.Img src={calculator} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>CALCULATOR</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/calculator")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                   
                    <Col lg={3}></Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                         <Card.Img src={Govtlogo} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>GOVERMENT SCHEMES</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/govts")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="mb-2">
                     <Card.Img src={Etlogo} className="p-2"></Card.Img>
                        <Card.Body>
                           <Card.Title>EXPERTS TALK</Card.Title>
                           <Button className="mt-2 btn-sm" onClick={()=>navigate("/experts")}>MORE INFORMATION</Button>
                        </Card.Body>
                       </Card>
                    </Col>
                    

                   </Row>
               </Container>
               </div>
               </div>
            </>
            
            </>

          )
      }
