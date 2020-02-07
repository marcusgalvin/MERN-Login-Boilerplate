var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//connect to data base
const mongoURI = 'mongodb://localhost:27017/mernloginreq'

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongo connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')
app.use('/users', Users)

app.listen(port, () => {
  console.log("server is running on port: " + port)
})