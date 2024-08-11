
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(bodyParser.json());

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   });

 const dbConnect = require("./config/database");
 dbConnect();  

 app.get("/", (req,res) => {
    res.send(`<h1> this is homepage baby</h1>`);
 });
 