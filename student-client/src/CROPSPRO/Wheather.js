import { useEffect, useState } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import './style.css'

export function Wheather() {
   const [city, setCity] = useState(null)
   const [search, setSearch] = useState("");
   
   useEffect(() => {
      const fetchApi = async () => {
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b6e9743909314bc1020b3091b11e07c3`
         const response = await fetch(url);
         const data = await response.json();
         setCity(data.main)
         console.log(data);
      }
      fetchApi();
   }, [search]);

   return (
      <>
       <div className="weatherdiv">
       <Container className="text-center justify-content-center">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                         
                          <div className="divone mt-3">
                          <h4 className="text-center pt-3 text-light">Check Your Area Weather</h4>

                             <input type="search" className="mt-2"  onChange={(event) => { setSearch(event.target.value) }}></input> 
                             
                             {!city ? (
                        <p className="pt-2">No Data Found</p>
                     ) : (<>
                        <div className="info cardone">
                           <h2 className="location">
                              <i className="fas fa-street-view"></i>{search}

                           </h2>
                           <h2 className="temp mt-2">{city.temp}Cel
                           </h2>
                           <h3 className="temp-minmax">Min:{city.temp_min}Cel|Max:{city.temp_max}Cel

                           </h3>
                        </div>


                     </>)
                     }
                              
                          </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>

           </Container>

       </div>
  


      </>
   )

}