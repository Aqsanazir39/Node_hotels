const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MenuItems = require('./models/menuItem');
const MenuItem = require('./models/menuItem');

app.get('/', function(req , res){
  res.send("Welcome to our hotel");
})

//import the router file
const personRoutes =require('./routes/personRoutes');
app.use('/person',personRoutes);

//import the menu router
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menuItem' , menuItemRoutes);

//server port
app.listen(3000, ()=>{
console.log('server was running on port no: 3000');

});