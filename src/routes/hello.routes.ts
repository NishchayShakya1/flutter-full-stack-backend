import { Router, Request, Response } from "express";

const helloRouter = Router();

// Define route paths

helloRouter.get("/", (req, res) => { 
    res.json({"data": "Server is Live"})
});


export default helloRouter