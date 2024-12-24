import express from "express"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config({
    path : './env',
})

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended : true, limit : "16kb"}));
app.use(express.static("public"));

import studentRouter from "./routes/student.routes.js";
app.use("/api/v1/student", studentRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port : ${process.env.PORT}`);
})