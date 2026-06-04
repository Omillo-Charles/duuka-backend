import cookieParser from "cookie-parser";
import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to the dotSoko ExpressJS Backend API");
})

app.listen(PORT, () => {
    console.log(`The dotSoko ExpressJS Backend API is running on http://localhost:${PORT}`)
})

export default app;