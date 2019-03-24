const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config()

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "client/build"));
}

// API routes
app.use(routes)

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")

// Start server on listed port above
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT}!`);
});

app.on("listening", ()=> {
  console.log(`I'm already on`)
})
