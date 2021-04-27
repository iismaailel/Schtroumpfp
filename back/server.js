const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const SchtroumpfRoute = require('./routes/schtroumpf')
const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb://localhost:27017/testdb',{userNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err)=>{
  console.log(err)
})

db.once('open',()=>{
  console.log('Database Connecttion Established')
})

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log('Server is running on port ${PORT} '+ PORT)
})

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/api/schtroumpf', SchtroumpfRoute)
app.use('/api', AuthRoute)
