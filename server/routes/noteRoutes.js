import express from "express";
import {displayNotes,addNotes,deleteNotes, updateNotes} from "../controllers/notesController.js";
import protectRoute from "../middleware/protectRoute.js";


const routes = express.Router();

routes.get("/",displayNotes);
routes.post("/", addNotes);
routes.delete("/",deleteNotes);
routes.put("/", updateNotes);


export default routes;
