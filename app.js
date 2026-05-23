import express from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser)

app.get("/", (req, res)=>{
  return res.json({
    title: "The dotSoko Express.js backend API",
    body: "Welcome to the dotSoko Express.js backend API"
  })
})

app.listen(PORT, ()=>{
  console.log(`The dotSoko backend API is running on http://localhost:${PORT}`)
})
