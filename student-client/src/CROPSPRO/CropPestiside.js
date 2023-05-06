import { Component } from "react";
import { Card, Container, Carousel } from "react-bootstrap";
import { GetPestiside } from "../CROPSSERVICES/CropService";
const carousals = new URL("../AllImages/pesticides.jpg",import.meta.url)
 const carousalsfirst= new URL("../AllImages/insec.jpg",import.meta.url)
 const carousalssecond= new URL("../AllImages/fungi.jpg",import.meta.url)
 const carousalsthird= new URL("../AllImages/herbs.jpg",import.meta.url)
 const carousalsfourth= new URL("../AllImages/larva.jpg",import.meta.url)
 const carousalsfifth= new URL("../AllImages/rodent.jpg",import.meta.url)

export class CropPestiside extends Component {
   constructor() {
      super();
      this.state = {
         formData: [],

      }
   }

   handleFetch = async () => {
      const res = await GetPestiside();
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
                           src={carousals}
                           height="450"
                           alt="First slide"
                        />
                       <Carousel.Caption>
                           <h3>PESTICIDES</h3>
                       </Carousel.Caption>
                     </Carousel.Item>

                  <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={carousalsfirst}
                           height="450"
                           alt="First slide"
                        />
                        <Carousel.Caption>
                           <h3>INSECTICIDES</h3>
                        </Carousel.Caption>

                     </Carousel.Item>
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={carousalssecond}
                           height="450"
                           alt="Second slide"
                        />
                          <Carousel.Caption>
                           <h3>HERBICIDES</h3>
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
                           <h3>FUNGISIDES</h3>
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
                           <h3>LARVICIDES</h3>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={carousalsfifth}
                           height="450"
                           alt="Fifth slide"
                        />
                        <Carousel.Caption>
                           <h3>RODENTICIDES</h3>  
                        </Carousel.Caption>
                     </Carousel.Item>

                  </Carousel>
               </div>

               <div className="divpesticides">

                  <Container className="mt-3 text-center">
                     <h4 className="text-center pt-3 head3">PESTICIDES</h4>

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