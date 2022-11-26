
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDB, getDB } = require("./config/database");


const trees = require("./models/trees");
const books = require("./models/books");
const books_do = require("./controllers/books");
const book_route = require("./controllers/routes/books")

const app = express();
const userRouter = require("./controllers/User");
var properties = require("./config/properties");
const { ObjectId } = require("mongodb");

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(express.json());
app.use(cors());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


connectToDB((err) => {
  if (!err) {
    app.listen(properties.PORT, (req, res) => {
      console.log(`Server is running on ${properties.PORT} port.`);
    });
    db = getDB();
  }
})
app.use("/api/auth", userRouter);

app.use("/api/book", book_route)

app.post("/Books", (req, res) => {
  books_do.post(req.body).then((result) => res.status(201).json(result));
});
app.delete("/Books/:id", (req, res) => {});
