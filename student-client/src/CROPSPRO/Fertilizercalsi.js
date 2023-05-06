import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Container, Alert, Row, Col,Card,Button } from 'react-bootstrap';

export function FertilizerForm() {
    const [area, setArea] = useState('');
    const [ureaQuantity, setUreaQuantity] = useState('');
    const [dapQuantity, setDapQuantity] = useState('');
    const [mopQuantity, setMopQuantity] = useState('');
    const [ureaQuantities, setUreaQuantities] = useState('');
    const [dapQuantities, setDapQuantities] = useState('');
    const [mopQuantities, setMopQuantities] = useState('');
    const [isdatashow,setisDatashow] = useState(false);
    const [isdata,setisData] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ureaTotal = area * 110;
        const dapTotal = area * 55;
        const mopTotal = area * 20;
 
        setUreaQuantity(ureaTotal);
        setDapQuantity(dapTotal);
        setMopQuantity(mopTotal);
    };
    const handleSubmitmaize=(e)=>{
        e.preventDefault();
        const ureaTotals = area * 155;
        const dapTotals = area * 55;
        const mopTotals = area * 20;
        setisData(false)
        setUreaQuantities(ureaTotals);
        setDapQuantities(dapTotals);
        setMopQuantities(mopTotals);
   
   

            
    }

    return (
        <>
            <Container className="mt-3">
                <Alert className='text-center'>Calculate Fertilizer of Crops</Alert>
            </Container>
            <Container>
                  <Row>
                    <Col lg={4}>
                         <Card>
                             <Card.Body>
                             <Card.Title className="text-center">Wheat</Card.Title>
                           
                             <Card.Text>
                                  <h5 className="ms-2">Enter Plot Size</h5>
                                  <form onSubmit={handleSubmit}>
                                 
                                       <div className="text-center">
                                         
                                       <TextField type="text" className="text-center"
                                       onChange={(e) => setArea(e.target.value)} ></TextField>
                                       </div>
                                       <div className="ms-5">
                                       <Button type="submit" className="mt-2  btn-sm" onClick={()=> setisData(!isdata)}>Calculate</Button>
                                         
                                       </div>
                                        <br></br>
                                  
                                  </form>

                             </Card.Text>
                                 
                                
                             <Card.Text>
                             {isdatashow?(
                                    <>
                                    <p>Urea Quantity:{ureaQuantity} kg</p>
                                    <p>DAP Quantity:{dapQuantity} kg</p>
                                    <p>MOP Quantity:{mopQuantity} kg</p>
                                      
                                    </>

                                 ):null

                                }
                             </Card.Text>
                             </Card.Body>
                             
                         </Card>
                         
                          
                    </Col>
                    <Col lg={4}>
                    <Card>
                             <Card.Body>
                             <Card.Title className="text-center">Maize</Card.Title>
                           
                             <Card.Text>
                                  <h5 className="ms-2">Enter Plot Size</h5>
                                  <form onSubmit={handleSubmitmaize}>
                                 
                                       <div className="text-center">
                                         
                                       <TextField type="text" className="text-center"
                                       onChange={(e) => setArea(e.target.value)} ></TextField>
                                       </div>
                                       <div className="ms-5">
                                       <Button type="submit" className="mt-2  btn-sm" onClick={()=> setisDatashow(!isdatashow)}>Calculate</Button>
                                         
                                       </div>
                                        <br></br>
                                  
                                  </form>

                             </Card.Text>
                                 
                                
                             <Card.Text>
                             {isdatashow?(
                                    <>
                                    <p>Urea Quantity:{ureaQuantities} kg</p>
                                    <p>DAP Quantity:{dapQuantities} kg</p>
                                    <p>MOP Quantity:{mopQuantities} kg</p>
                                      
                                    </>

                                 ):null

                                }
                             </Card.Text>
                             </Card.Body>
                             
                         </Card>
                         
                    </Col>
                  </Row>
            </Container>
            
            
            
            {/* <form onSubmit={handleSubmit}>
                <label>
                    Total area to be fertilized (in acres):
                    <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                </label>
                <button type="submit">Calculate</button>
                <p>Urea Quantity: {ureaQuantity} kg</p>
                <p>DAP Quantity: {dapQuantity} kg</p>
                <p>MOP Quantity: {mopQuantity} kg</p>
            </form> */}

        </>








    );
}


