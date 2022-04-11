import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routers/web";
require("dotenv").config();
const PORT = process.env.PORT || 9999;

const app = express();
configViewEngine(app);
initWebRouter(app);

app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
})