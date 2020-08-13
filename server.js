const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')
const fs = require("fs")
const https = require("https")

var options = {
  key: fs.readFileSync("./private.key"),
  cert: fs.readFileSync("./certificate.crt"),
};

require("dotenv").config();

// START =============================================================================================================
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.listen(PORT, () => {
//   console.log(`using port: ${PORT}`);
// });

// const server = https.createServer(options, app).listen(PORT, function(){
//   console.log("Express server listening on port " + PORT);
// });

const server = https.createServer(app).listen(PORT, function(){
  console.log("Express server listening on port " + PORT);
});


//CONNECT TO MONGODB ATLAS
mongoose.connect(`mongodb+srv://andrewapinon:${process.env.MONGODB_PASSWORD}@yflights.hs835.mongodb.net/YFlight`, { useNewUrlParser: true, useUnifiedTopology: true }, () =>{
  console.log("Connected to DB")
})

// mongoose.connect("mongodb+srv://andrewapinon:mongos123@pit-khfqo.mongodb.net/PIT", { useNewUrlParser: true, useUnifiedTopology: true } ,() =>{
//     console.log("connected to DB")
// })


// mongoose.connect(
//   `mongodb+srv://andrewapinon:mongos123@yflights.hs835.mongodb.net/YFlights`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected to DB");
//   }
// );


app.get("/", (req,res) => {
    res.send("SERVER WORKING!!")
})



//ROUTES
const commentRoute = require("./Routes/Comment.route");
const getCommentsRoute = require("./Routes/GetComments.route");

app.use("/comments", commentRoute);
app.use("/getComments", getCommentsRoute);