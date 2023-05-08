import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { dataBaseConnection } from "./db.js";
import { loginRouter } from "./routes/loginUser.js";
import { signupRouter } from "./routes/signupuser.js";
import { isSignedIn } from "./controller/auth.js";
import { contentRouter } from "./routes/content.js";


//configure env
dotenv.config();


//connecting db
dataBaseConnection();
const app =express();
const PORT=process.env.PORT

//middleware

app.use(express.json());
app.use(cors());
app.use("/api/content",isSignedIn,contentRouter)
app.use("/api/signup",signupRouter)
app.use("/api/login",loginRouter)
app.listen(PORT,()=>console.log(`server is running successfully in port ${PORT}`))

