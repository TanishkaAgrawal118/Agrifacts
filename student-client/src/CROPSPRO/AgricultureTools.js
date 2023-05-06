import { Component } from "react";
import { Card, Container, Carousel } from "react-bootstrap";
import { FetchAgricutureTools } from "../CROPSSERVICES/CropService";
const carousals = new URL("../AllImages/powerweed.jpg",import.meta.url)
 const carousalsfirst= new URL("../AllImages/Ripper.jpg",import.meta.url)

 const carousalsthird= new URL("../AllImages/rotarytiller.jpg",import.meta.url)
 const carousalsfourth= new URL("../AllImages/LLLSli.jpg",import.meta.url)


export class AgricutureTools extends Component {
   constructor() {
      super();
      this.state = {
         formData: [],

      }
   }

   handleFetch = async () => {
      const res = await FetchAgricutureTools();
      this.setState({ formData: res.data });
      console.log(res.data);
   }
   componentDidMount() {
      this.handleFetch();
   }
   render() {
      return (
         <>
            <div>
               <div className="carousaldiv">
                 
                  <Carousel fade>
                  <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={carousalsfirst}
                           height="450"
                           alt="First slide"
                        />
                       <Carousel.Caption>
                           <h3>RIPPER</h3>
                       </Carousel.Caption>
                     </Carousel.Item>

                  <Carousel.Item>
                        <img
                           className="d-block w-100"
                          
                           src={carousals}
                           height="450"
                           alt="First slide"
                        />
                        <Carousel.Caption>
                           <h3>DRONS</h3>
                        </Carousel.Caption>

                     </Carousel.Item>
                
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={carousalsthird}
                           height="450"
                           alt="Third slide"
                        />
                         <Carousel.Caption>
                           <h3>ROTARY-TILLER</h3>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={carousalsfourth}
                           height="450"
                           alt="Fourth slide"
                        />
                           <Carousel.Caption>
                           <h3>LASER-LAND-LEVELER</h3>
                        </Carousel.Caption>
                     </Carousel.Item>
                

                  </Carousel>
               </div>

               <div className="divpesticides">

                  <Container className="mt-3 text-center">
                     <h4 className="text-center mt-3 head3">Agricuture Tools</h4>

                  </Container>
                  <Container>
                     {
                        this.state.formData.map((data) => {
                           return (
                              <>
                                 <Card className="mt-2 cardtwo">
                                    <Card.Body>
                                       <Card.Title className="head3">{data.name}</Card.Title>
                                       <Card.Text>{data.basicInfo}</Card.Text>
                                    </Card.Body>
                                 </Card>


                              </>


                           )
                        })


                     }

                  </Container>

               </div>
            </div>




         </>
      )
   }
}