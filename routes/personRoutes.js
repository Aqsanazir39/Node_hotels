const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
//post Method for person
router.post('/',async(req, res) =>{
try{
  const data = req.body;

  const newPerson = new Person(data);

  //save newPerson to the database
  const response = await newPerson.save(); 
console.log('data saved');
res.status(200).json(response);

}catch(err){
console.log(err);
res.status(500).json({err: 'internal server error'});
}
})

// Get Method for person

router.get('/', async(req, res)=>{
  try{
const data = await Person.find();
console.log('data fetched');
res.status(200).json(data);

  }catch(error){
    console.log(error);
    res.status(500).json({err: 'internal server error'});
  }
})

// parametrised API
router.get('/:workType', async(req , res)=>{
  try{
const workType = req.params.workType;
if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
const response = await Person.find({work: workType});
console.log('respose fetched');
res.status(200).json(response);


}else{
  res.status(404).json({error: 'internal server error'});
}
  }catch(err){
    console.log(err);
    res.status(500).json({err: 'internal server error'});
  }
})

//update method
router.put('/:id',async(req, res)=>{
  try{
const personId = req.params.id;
const updatedPersonData = req.body;
const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
  new: true,
  runValidators: true,
})
if(!response){
  return res.status(404).json({error: 'Person not find'});
}else{
  console.log('data updated');
  res.status(200).json(response);
  
}
  }catch(err){
    console.log(err);
    res.status(500).json({err: 'internal server error'});
  }
})


//Delete Methods
router.delete('/:id', async(req, res)=>{
  try{
const personId = req.params.id;
const responce = await Person.findByIdAndDelete(personId);
if(!responce){
  return res.status(404).json({message: 'person not deleted '});
}else{
  console.log('data deleted');
  res.status(200).json(responce);
  
}
  }catch(err){
    console.log(err);
    res.status(500).json({err: 'internal server error'});
  }
} )
module.exports = router;