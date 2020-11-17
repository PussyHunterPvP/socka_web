//jshint esversion:6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("home");
});

app.listen(3000, function(){
  console.log(" ");
  console.log("Server ide na porte 3000 ...");
  console.log(" ");
});
