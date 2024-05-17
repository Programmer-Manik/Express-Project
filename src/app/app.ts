import express, {  NextFunction, Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

//parser
 app.use(express.json());
 app.use(express.text());

 const logger = (req:Request, res:Response, next:NextFunction) => {
    console.log(req.method, req.url, req.hostname, );
    next();
 }

app.get("", logger, (req:Request, res:Response, ) => {
  res.send("Hello World!");
});

app.post("/", logger, (req:Request, res:Response,) => {
    console.log(req.body);
    // res.send("Hello World!");
    res.json({"success": "success"})
}); 

export default app;