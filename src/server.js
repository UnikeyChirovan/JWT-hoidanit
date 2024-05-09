import express from "express";
import dotenv from "dotenv";
dotenv.config();
import configViewEngine from "./config/viewEngine";
import initWWebRoutes from "./routes/web";

const app = express();
// config view engine
configViewEngine(app);
// init web routes
initWWebRoutes(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`>>> JWT backend is running on the port ${PORT}`);
});
