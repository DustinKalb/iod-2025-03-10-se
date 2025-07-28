const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // Broadcast to others that a user connected
  socket.broadcast.emit("chat message", "A user connected");

  // Listen for chat messages and broadcast to all
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  // Broadcast to others that a user disconnected
  socket.on("disconnect", () => {
    socket.broadcast.emit("chat message", "A user disconnected");
  });
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
