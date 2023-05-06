import express from "express";
import { AgricutureDataFetch, AgricutureToolsData, ColdDataFetch, ColdSmallDataFetch, CropsDataFetch, Deleteirrigation, EditCrops, Editirrigation, ExpertDataFetch, FetchAllCrops, GetAllStatesSchema, GetgovtSchema, Getirrigation, GetlandData, GetPestiSide, GetSellData, GetStatetSchema, GovtSchemaData, irrigationData, pestisideData, SaveAllCropsData, SaveAllStateData, SaveColdData, SaveCropsData, SaveExpertData, SaveLandData, SaveSmallColdStorge, saveStateScheme, SaveVarietyData, ToolsSellData, UpdateCrops, UpdateCropsVariety, UpdateStatesAll } from "../Controller/CropsController.js";
import multer from "multer";
import path from "path";
const CROPSROUTER = express.Router();

const storage =multer.diskStorage({
       destination:'./src/userImages',
       filename:(req,file,cb)=>{
          return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
       }
})
CROPSROUTER.use(express.static('src/userImages'))
const upload = multer({storage:storage});
CROPSROUTER.post("/crops",SaveCropsData);
CROPSROUTER.post("/saveallCrops",SaveAllCropsData);
CROPSROUTER.post("/savevariety",SaveVarietyData);
CROPSROUTER.post("/pestiside",pestisideData);
CROPSROUTER.post("/govt",GovtSchemaData)
CROPSROUTER.post("/state/schemes",saveStateScheme);
CROPSROUTER.post("/states",SaveAllStateData)
CROPSROUTER.post("/saveirrigation",upload.single('image'),irrigationData)
CROPSROUTER.post("/savexperts",SaveExpertData)
CROPSROUTER.post("/savecoldstorage",SaveColdData)
CROPSROUTER.post("/savesmallcold",SaveSmallColdStorge)
CROPSROUTER.post("/selltools",upload.single('image')  , ToolsSellData);
CROPSROUTER.post("/land",SaveLandData);
CROPSROUTER.post("/agicuturetools",AgricutureToolsData)
CROPSROUTER.put("/crops/update/:id/:obj",UpdateCrops);
CROPSROUTER.put("/crop/edit/:id",EditCrops)
CROPSROUTER.put("/crop/varietydata/:id/:obj",UpdateCropsVariety);
CROPSROUTER.get("/allcrops",FetchAllCrops);
CROPSROUTER.put("/states/schemes/:id/:obj",UpdateStatesAll)
CROPSROUTER.put("/irrigation/:id",Editirrigation)
CROPSROUTER.get("/",CropsDataFetch);
CROPSROUTER.get("/govtschema",GetgovtSchema);
CROPSROUTER.get("/pestiside",GetPestiSide);
CROPSROUTER.get("/state/schemes",GetStatetSchema);
CROPSROUTER.get("/states",GetAllStatesSchema)
CROPSROUTER.get("/irrigation",Getirrigation)
CROPSROUTER.get("/experts",ExpertDataFetch)
CROPSROUTER.get("/colddata",ColdDataFetch)
CROPSROUTER.get("/smallcold",ColdSmallDataFetch)
CROPSROUTER.get("/buy/tools",GetSellData)
CROPSROUTER.get("/land",GetlandData)
CROPSROUTER.get("/agicuturetools",AgricutureDataFetch)
CROPSROUTER.delete("/irrigation/:id",Deleteirrigation)
export default CROPSROUTER;