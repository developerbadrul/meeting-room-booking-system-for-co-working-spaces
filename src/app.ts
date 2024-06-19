import cors from "cors";
import express, { Application, Request, Response } from "express"
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import AppError from "./app/errors/AppError";
import httpStatus from "http-status";


const app: Application = express()

// parser 
app.use(express.json());
app.use(cors());

// application route 

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World")
})

// Error handling for unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(httpStatus.NOT_FOUND, `Not found ${req.originalUrl}`));
});

app.use(globalErrorHandler);


export default app;