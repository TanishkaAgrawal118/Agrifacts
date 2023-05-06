import express from "express";
import cors from "cors";
import { configureDb } from "./src/configure/DBconfig.js";
import CROPSROUTER from "./src/Router/CrposRouter.js";
import adminRouter from "./src/Router/AdminRouter.js";
const app = express();
app.use(cors());
app.use(express.json())
app.use(CROPSROUTER);
app.use(adminRouter);
 app.listen(5700,()=>{
    configureDb();
      console.log("Server is Running...")
 })