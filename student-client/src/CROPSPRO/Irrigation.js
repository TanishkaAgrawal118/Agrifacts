import React, { Component } from 'react';
// import { Container,Alert } from "react-bootstrap";
import { Button, Row,Container,Col} from "react-bootstrap";
import { GetIrrigationData } from "../CROPSSERVICES/CropService";
export class Irrigation extends Component{
        constructor(){
            super();
            this.containerRef = React.createRef();
            this.state={
                  IrrigationData:[],
            }
        }
        handleFetch = async () => {
            const res = await GetIrrigationData();
            this.setState({IrrigationData: res.data});
            
            console.log(res.data);
        }
        handleExploreClick = () => {
            window.scrollTo({
                top: this.containerRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
        
        componentDidMount() {
    
            this.handleFetch();
        }
      render(){
          return(
            <>
              <div>
                  <div className="divirrigation">
                      <div className="divirrigation2">
                      <h3 className="heading1">Agriculture Revolution </h3>
                      <h6 className="heading2">Transforming The  Way We Water Our Crops</h6>
                      <Button className="btn bnt-sm bg-primary" onClick={this.handleExploreClick}>Explore More</Button>

                      </div>
                  </div>
                  <Container className="mt-4" ref={this.containerRef}>
                         <Row>
                             {
                               this.state.IrrigationData.map((data)=>{
                                    return(
                                        <>
                                         <Col lg={6}>
                                          <div className="mt-3">
                                          <h1 className="heading5">{data.name}</h1>
                                         <p>{data.basicInfo}</p>
                                          </div>
                                     </Col>
                                    <Col lg={6}>
                                          <img  src={data.image} alt="#" className="m-2" width="450px" height="300px"/>
                                    </Col>
                                    <hr></hr>
                                          
                                        </>
                                    )
                               }) 

                             }
                         </Row>


                    </Container>
                  
                    
              </div>
            
            </>
          )
      }     
}