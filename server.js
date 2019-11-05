var express = require("express")
var bodyParser = require("body-parser")
var mongodb = require('mongodb');
const mongoose = require('mongoose');

var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = Promise

var Chats = mongoose.model("Chats", {
    name: String,
    chat: String
})

const dbURI =
  "mongodb+srv://sarthak:A9DIsxmjJk6UeDNU@cluster0-atyxk.mongodb.net/test?retryWrites=true&w=majority";

const options = {
  reconnectTries: 5,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);


app.post("/chats", async (req, res) => {
    try {
        var chat = new Chats(req.body)
        await chat.save()
        res.sendStatus(200)
        //Emit the event
        io.emit("chat", req.body)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

app.get("/chats", (req, res) => {
    Chats.find({}, (error, chats) => {
        res.send(chats)
    })
})

io.on("connection", (socket) => {
    console.log("Socket is connected...")
})

var server = http.listen(3020, () => {
    console.log("Well done, now I am listening on ", server.address().port)
})