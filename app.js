//jshint esversion:6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const db = "mongodb://localhost:27017/skuska"
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true} );
mongoose.pluralize(null);

const adminSchema = {
  username: String,
  password: String
};

const Admin = mongoose.model("Admin", adminSchema);

const newAdmin = new Admin({
  username: "dodo",
  password: 321
});


app.get("/", (req,res) => {
  res.render("loginPage");
});

app.post("/login", (req,res) => {
  Admin.findOne({username: req.body.username}, (err, result) => {
    if (result){
      if(err){
        res.render(err);
      } else {
        if(result.password === req.body.password){
          Admin.find({}, (err,results)=>{
            if(!err){
              const pocetAdminov = results;
              res.render("adminPanel", {dbInfo: db, pocetAdminov: pocetAdminov});
            }
          });

        } else {
          res.render("loginPage");
        }
      }
    } else {
      res.render("loginPage");
    }

  });
});

app.listen(3000, function(){
  console.log(" ");
  console.log("Server ide na porte 3000 ...");
  console.log(" ");
});





/*
const formularik = {
  name: String,
  content: String
};

const Formular = mongoose.model("formular", formularik);

app.get("/", (req, res)=>{
  Formular.find({}, function(err, results){
  const vysledok = results;
  res.render("home", {menoAtext: vysledok});
  });


});

app.post("/", (req, res)=>{
  const name = req.body.name;
  const text = req.body.textInput;

  const formular =  new Formular({
    name: name,
    content: text
  });

  formular.save();
  res.redirect("/");
});

app.post("/delete", (req,res)=>{


  const itemToRemove = req.body.itemToRemove;

  Formular.deleteOne({_id: itemToRemove}, function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/");
    }
  });

});
*/
