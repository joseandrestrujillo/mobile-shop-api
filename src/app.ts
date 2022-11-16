import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"
import db from "./config/mongo"

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({
    origin: "*"
}));
app.use(router);
db().then(() => console.log("Database connected"));
app.listen(PORT, () => console.log("API running in port " + PORT));

