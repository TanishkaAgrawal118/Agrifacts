import  express from "express";
import { login, saveAdmin } from "../Controller/AdminController.js";
const adminRouter = express.Router();
adminRouter.post("/signing",saveAdmin);
adminRouter.post("/login",login)
export default adminRouter;