import {BrowserRouter,Route,Routes } from 'react-router-dom';
import { AgricutureTools } from './CROPSPRO/AgricultureTools.js';
import { BuyAndSellTools } from './CROPSPRO/BuyAndSell.js';
import { Coldstorage } from './CROPSPRO/ColdStorage.js';
import { CropPestiside } from './CROPSPRO/CropPestiside.js';
import { Crop } from './CROPSPRO/Crops.js';
import { ExpertData } from './CROPSPRO/Experts.js';
import { FertilizerForm } from './CROPSPRO/Fertilizercalsi.js';
import { GovtSchema } from './CROPSPRO/GovtScheems.js';
import { Home } from './CROPSPRO/Home.js';
import { Irrigation } from './CROPSPRO/Irrigation.js';
import { NavigationBar } from './CROPSPRO/Navbars';
import { Product } from './CROPSPRO/product.js';
import { Login } from './CROPSPRO/Signin.js';
import { SignUp } from './CROPSPRO/SignUp.js';
import {Wheather} from "./CROPSPRO/Wheather.js"
function App() {
  return(
    <div className="App">
         <>
              <BrowserRouter>
                <NavigationBar />
              
                 <Routes>
                 <Route path="/signup" element={<SignUp />}></Route>
                 <Route path="/login" element={<Login />} />
                   <Route path='/' element={<Home />}></Route>
                   <Route path='/crop' element={<Crop />}></Route>
                   <Route path='/product' element={<Product />}></Route>
                    <Route path="/weather" element={<Wheather />}></Route>
                    <Route path='/pestiside' element={<CropPestiside/>}></Route>
                    <Route path='/tools' element={<AgricutureTools/>}></Route>
                    <Route path='/govts' element={<GovtSchema />}></Route>
                    <Route path="/production" element={<Product></Product>}></Route>
                    <Route path="/irrigation" element={<Irrigation />}></Route>
                    <Route path="/experts" element={<ExpertData />}></Route>
                    <Route path="/coldstorage" element={<Coldstorage />} />
                    <Route path="/buysell"  element={<BuyAndSellTools />} />
                   <Route path="/calculator" element={<FertilizerForm />}></Route>
                 </Routes>
              
              </BrowserRouter>
              
    
         </>
        
    </div>
  );
}

export default App;
