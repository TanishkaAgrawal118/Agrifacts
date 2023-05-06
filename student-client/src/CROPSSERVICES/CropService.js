import axios from "axios"

export function GetCropsData(){
    return axios.get("http://localhost:5700/allcrops")
}
export function GetPestiside(){
       return axios.get("http://localhost:5700/pestiside")
}
export function GetGovtSchemes(){
       return axios.get("http://localhost:5700/govtschema")
}
export function GetStateSchemes(){
            return axios.get("http://localhost:5700/states")
}
export function GetIrrigationData(){
       return axios.get("http://localhost:5700/irrigation")
}

export  function SaveExpertsData(data){
        return axios.post("http://localhost:5700/savexperts",data)
}

//save data coldstorage api
export  function SaveColdStorage(data){
        return axios.post("http://localhost:5700/savecoldstorage",data);
}
export async function FetchColdStorage(){
       return axios.get("http://localhost:5700/colddata");
}

//save Buy Sell 
export function SavesellData(data){
         return axios.post("http://localhost:5700/selltools",data)
}
export  function FetchSellData(){
          return axios.get("http://localhost:5700/buy/tools");
}
export function SaveLanData(data){
         return axios.post("http://localhost:5700/land",data)
}
export function FetchLandData(){
       return axios.get("http://localhost:5700/land");  
}
export function FetchAgricutureTools(){
               return axios.get("http://localhost:5700/agicuturetools")
}
export function SaveSignup(data){
         return axios.post("http://localhost:5700/signing",data)
}
export function SaveSignIngData(data){
       return axios.post("http://localhost:5700/login",data)
}