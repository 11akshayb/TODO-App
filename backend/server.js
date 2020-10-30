var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Tasks = require('./routes/Tasks')

const db = require("./database/db");

// db.sequelize.sync({ force: false }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// db.sequelize.sync({ force: false , alter : true })

app.use('/users', Users)
app.use('/api', Tasks)

app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})

module.exports = app;