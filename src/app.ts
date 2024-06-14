import cors from "cors";
import express, { Application, Request, Response } from "express"
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";


const app: Application = express()

// parser 
app.use(express.json());
app.use(cors());

// application route 

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World")
})


app.use(globalErrorHandler);


export default app;