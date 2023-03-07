const express = require('express');
const bodyParser=require('body-parser');
const date = require(__dirname + "/date.js");

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));


const items=["buy-food","cycling"];
const workItems=["None"];





app.get("/",function(req,res){



const day=date.getDate();
res.render("list", {ListDay: day,ListItem: items});
})

app.get("/work",function(req,res){
  res.render("list",{ListDay: "Work",ListItem: workItems});
})

app.get("/about",function(req,res){
  res.render("about");
})

app.post("/",function(req,res){

  if(req.body.list=="Work"){

    item=req.body.newitem;


    workItems.push(item);
     res.redirect("/work");

  }
  else{
 item=req.body.newitem;


 items.push(item);
  res.redirect("/");

}

});



app.listen(3000,function(){

console.log("server is running on port 3000");

});
