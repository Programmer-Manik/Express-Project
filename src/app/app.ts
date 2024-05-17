import express, {  NextFunction, Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

//parser
 app.use(express.json());
 app.use(express.text());


 const userRoute = express.Router();
 const courseRoute = express.Router();
 app.use('/api/users', userRoute);
 app.use('/api/courses', courseRoute);

 userRoute.get('/create-user', (req:Request, res:Response) => {
    const user = req.body;
    console.log(user);

    res.json({success: true,message:"Success",data:user});

 }) 

 courseRoute.get('/create-course', (req:Request, res:Response) => {
    const course = req.body;
    console.log(course);
    res.json({success: true,message:"Success",data:course});
 }) ;

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