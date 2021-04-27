const Schtroumpf = require('../models/Schtroumpf')

//show the list of Schtroumpfs
const index = (req, res, next)=> {
  Schtroumpf.find()
  .then(response =>{
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      message : 'An error occured'
    })
  })
}

const show = (req, res, next)=> {
  let schtroumpfID=req.body.schtroumpfID
  Schtroumpf.findById(schtroumpfID)
  .then(response =>{
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      message : 'An error occured'
    })
  })
}

//add new Schtroumpf
const store = (req, res, next)=> {
  let schtroumpf  = new Schtroumpf({
    name: req.body.name,
    age: req.body.age,
    nourriture: req.body.nourriture,
    famille: req.body.famille
  })
  schtroumpf.save()
  .then(response =>{
    res.json({
      message: 'Schtroumpf added successfully'
    })
  })
  .catch(error=>{
    res.json({
      message : 'An error occured'
    })
  })
}




//update a Schtroumpf
const update = (req, res, next)=> {
  let schtroumpfID=req.body.schtroumpfID

  let updatedData  = {
    name: req.body.name,
    age: req.body.age,
    nourriture: req.body.nourriture,
    famille: req.body.famille
  }
  Schtroumpf.findByIdAndUpdate(schtroumpfID,{$set:updatedData})
  .then(()=>{
    res.json({
      message: 'Schtroumpf updated successfully'
    })
  })

  .catch(error=>{
    res.json({
      message : 'An error occured'
    })
  })
}

//delete a Schtroumpf
const destroy = (req, res, next)=> {
  let schtroumpfID=req.body.schtroumpfID
  Schtroumpf.findByIdAndRemove(schtroumpfID)
  .then(()=>{
    res.json({
      message: 'Schtroumpf deleted successfully'
    })
  })

  .catch(error=>{
    res.json({
      message : 'An error occured'
    })
  })
}


module.exports={
  index,show,store,update,destroy
}
