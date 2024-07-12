import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";
import router from "./router";
import { MONGO_URL } from "./constants";

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server listening on http://localhost:8080");
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
