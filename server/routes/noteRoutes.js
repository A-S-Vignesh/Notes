import express from "express";
import {displayNotes,addNotes,deleteNotes} from "../controllers/notesController.js";

const routes = express.Router();

routes.get("/", displayNotes);
routes.post("/", addNotes);
routes.delete("/", deleteNotes);


export default routes;
