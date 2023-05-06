
import { TextField } from "@mui/material";
import { Component } from "react";
import { Button,Card, Container,Row,Col, Table} from "react-bootstrap";
import { FetchColdStorage, SaveColdStorage } from "../CROPSSERVICES/CropService.js";


export class Coldstorage extends Component{
          constructor(){
               super();
               this.state={
                  formData:{},
                  StorageData:[],
                  isShow:false,
                  isDataShow:false,
               }
               this.handleSubmit = this.handleSubmit.bind(this);
            
          }
          handleChange = (event)=>{
                  console.log(event.target.value)
                  this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } })
                 console.log(event.target.name)
          }
          handleSubmit =async (event) => {
        
            event.preventDefault();
            console.log(this.state.formData)
           const res = await SaveColdStorage(this.state.formData);
           console.log(res.data)
    
        }
        handleFetch = async () => {
            const response = await FetchColdStorage();
            console.log(response.data);
            this.setState({ StorageData: response.data});
        }
    
    
        componentDidMount() {
            this.handleFetch();
        }
       render(){
         return(
            <>
            <div className="colddiv">
              <Container className="pt-3">
                <Row>
                    <Col lg={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title className="mt-2">
                            COLD STORAGE FORM
                        </Card.Title>
                        <hr></hr>
                       <Card.Text>
                       <Button className="mt-2 btn-primary btn-sm" onClick={()=>{this.setState({isShow:true})}}>ADD-NEW</Button>
                        {/* <Button className="mt-2 ms-2 btn-danger btn-sm">UPDATE</Button> */}
                       </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title className="mt-2"> 
                            ALL COLD STORAGE LIST
                        </Card.Title>
                        <hr></hr>
                        <Card.Text>
                        <Button className="btn btn-primary btn-sm mt-2"
                        onClick={() => {
                            this.setState({ isDataShow: !this.state.isDataShow });
                            this.setState({ isShow: false });
                        }}> {this.state.isDataShow ? "HIDE" : "SHOW"}
                                        </Button>

                        {/* <DropdownButton id="dropdown-basic-button mt-2" title="CATEGORY">
                                            <Dropdown.Item>
                                                SMALL
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                LARGE
                                            </Dropdown.Item>
                                         
                                        </DropdownButton> */}
                      
                        </Card.Text>

                        </Card.Body>
                       
                       
                    </Card>
                    </Col>
                </Row>
                    
               
              </Container>
              {
                this.state.isShow?(
                    <div className="coldstoragediv">
                    <Container className="mt-3">
                             <h3 className="text-center">Register New Cold Storage</h3>
                             <div>
                               <form onSubmit={this.handleSubmit}>
                                 <Row>
                                 
                                  <Col lg={4}>
                                      <TextField className="mt-2 mb-2" type="text" label="name" name="name" fullWidth onChange={this.handleChange}></TextField>
                                      </Col>
                                      <Col lg={4}>
                                      <TextField className="mt-2 mb-2" type="text" label="vegitablename" name="vegitables" fullWidth onChange={this.handleChange}></TextField>
                                      </Col>
                                      <Col lg={4}>
                                          <TextField className="mt-2 mb-2" type="text" label="duration" name="duration" fullWidth onChange={this.handleChange}></TextField>
                                          </Col>
                                          <Col lg={4}>
                                          <TextField className="mt-2 mb-2" type="text" label="faclities" name="facilities" fullWidth onChange={this.handleChange}></TextField>
                                          </Col>
                                          <Col lg={4}>
                                      <TextField className="mt-2 mb-2" type="text" label="capacity" name="totalcapacity" fullWidth onChange={this.handleChange}></TextField>
                                      </Col>
                                         <Col lg={4}>
                                          <TextField className="mt-2 mb-2" type="number" label="rate" name="Rent" fullWidth onChange={this.handleChange}></TextField>
                                          </Col>
                                          <Col lg={4}>
                                          <TextField className="mt-2 mb-2" type="text" label="state" name="state" fullWidth onChange={this.handleChange}></TextField>
                                          </Col>
                                          <Col lg={4}>
                                         <TextField className="mt-2 mb-2" type="text" label="district" name="dist" fullWidth onChange={this.handleChange}></TextField>
                                          </Col>
                                          <Col lg={4}>
                                          <TextField className="mt-2 mb-2" type="text" label="address" name="address" fullWidth onChange={this.handleChange}></TextField>
                                          </Col>
                                       
                                    
                                 </Row>
                                 <Button className="mt-2 btn-primary" type="submit">Submit</Button>


                                 </form>
                             </div>
                         </Container>
                         </div>


                ):null
              }
               
               {this.state.isDataShow?(
                   <div>
                        <Container className="mt-3">
                        <h3 className="text-center">All Cold Storages</h3>
                               <Table bordered>
                                  <thead>
                                  <tr>
                                    <th className="text-center">S.NO</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Category</th>
                                    <th className="text-center">Capacity/Ton</th>
                                    <th className="text-center">Rate/Quantal</th>
                                    <th className="text-center">Duration</th>
                                    <th className="text-center">Address</th>
                                    
                                </tr>
                                  </thead>
                                  <tbody>
                                  {this.state.StorageData.map((crop, index) => {
                                    return (
                                        <tr key={crop._id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{crop.name}</td>
                                            <td className="text-center">{crop.vegitables}</td>
                                            <td className="text-center">{crop.totalcapacity}</td>
                                            <td className="text-center">{crop.Rent}</td>
                                            <td className="text-center">{crop.duration}</td>
                                            <td className="text-center"><Button className="btn p-2 btn-sm" >More</Button></td>
                                        </tr>
                                    );
                                })}
                                   
                                      
                                  </tbody>

                               </Table>
                                 
                            </Container> 
                    </div>
                     
               ): null

               }

              
              </div>
            </>
         )
       }
}