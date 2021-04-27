const User =  require('../models/User')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const register = (req,res,next)=>{
  bcrypt.hash(req.body.password,10,function(err,hashedPass){
    if(err){
      res.json({
        error : err
      })
    }
    let user  = new User({
      name : req.body.name,
      email : req.body.email,
      password : hashedPass

    })
    user.save()
    .then(user =>{
      res.json({
        message : "User Added"
      })
    })
    .catch(error=>{
      res.json({
        message : "An error occured"
      })
    })
  })

}



const login = (req,res,next)=>{
  var username =  req.body.email
  var password = req.body.password
  User.findOne()
  .then(user=>{
    if(user){
      bcrypt.compare(password,user.password,function(err,result){
        if(err){
          res.json({
            error : err
          })
        }
        if(result){
          let token = jwt.sign({name:user.name},'verySecretValue',{expiresIn : '1d'})
          res.json({
            message : 'login successfully',
            token
          })
        }else {
          res.json({
            message : 'error password'
          })
        }
      })
    }else{
      res.json({
        message : 'No user found'
      })
    }
  })

}

module.exports = {
    register,login
}
