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

app.get("", logger, async(req:Request, res:Response, next:NextFunction) => {
  try{
   res.send(SomeThing);
  }catch(err){
   console.log(err)
   next(err);
   // res.status(400).json({
   //    success: false,
   //    message: "filed your function",
   //    data: null
   // })
  }
});

app.post("/", logger, (req:Request, res:Response,) => {
    console.log(req.body);
    // res.send("Hello World!");
    res.json({"success": "success"})
}); 

app.all("*" , (req:Request,res:Response)=>{
   res.status(500).json({
      success: false,
      message: "Route is not Found",
  })
})

//global error handel 
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  if(err){
   res.status(500).json({
      success: false,
      message: err.message,
      data: null
  })
  }
})


export default app;