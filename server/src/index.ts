import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import defineSocketEvents from "./socket/socketEvents";

const expressServer = express();
expressServer.use(cors());
const server = http.createServer(expressServer);
const socketServer = new Server(server, {
   cors: {
      origin: "*",
   },
});

expressServer.get("/", (req, res) => res.send("Hello World Baby"));

socketServer.on("connect", (socket) =>
   defineSocketEvents(socket, socketServer)
);

server.listen(5000, () => console.log("Server is running"));
