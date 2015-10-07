var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  console.log(req.body)
  res.sendStatus(200)
})

var server = app.listen(3000, function () {
  console.log('Server listening at http://' + server.address().address + ':' + server.address().port)
})
