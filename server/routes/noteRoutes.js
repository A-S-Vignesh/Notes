import express from "express";
import {displayNotes,addNotes,deleteNotes} from "../controllers/notesController.js";
import protectRoute from "../middleware/protectRoute.js";

const routes = express.Router();

routes.get("/",protectRoute,displayNotes);
routes.post("/",protectRoute, addNotes);
routes.delete("/",protectRoute, deleteNotes);


export default routes;
