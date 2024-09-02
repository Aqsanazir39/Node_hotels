const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');

//post method  for menuItem
router.post('/', async(req , res)=>{
  try{ 
    
    //save newMenuItems in db
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    res.status(200).json(response);
    console.log("Menu created successfully");
    }catch(err){
      console.log(error);
      res.status(500).json({err: 'internal server error'});
    }
   
  })

  //get method for menuItem
router.get('/', async(req , res)=>{
  try{ 
   
    const response = await MenuItem.find();
    res.status(200).json(response);
    console.log("Menu fetched successfully");
    }
  catch(err){
      console.log(err);
      res.status(500).json({err: 'internal server error'});
      
    }
   
  });
  

//perametrized API
router.get('/:tasteType', async(req, res)=>{
  try{

    const tasteType = req.params.tasteType;
  if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy'){
    const response = await MenuItem.find({taste: tasteType});
    console.log('respose fetched');
    res.status(200).json(response);
  }else{
    res.status(500).json({error: 'internal server error'});
  }
  }catch(err){
    res.status(500).json({err: 'internal server error'});
  }
})
  module.exports = router;