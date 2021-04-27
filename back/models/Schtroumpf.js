const mongoose   = require('mongoose')
const Schema = mongoose.Schema

const schtroumpfSchema = new Schema({
  name:{
    type : String
  },
  age:{
    type : Number
  },
  nourriture: {
    type : String
  },
  famille:{
    type : String
  }
}, {timestamps :true})

const Schtroumpf= mongoose.model('Schtroumpf', schtroumpfSchema)
module.exports = Schtroumpf
