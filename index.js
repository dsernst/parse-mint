var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var handleEmail = require('./handle-email.js')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.send('<h3>Sign up for an automatic text message with your weekly savings percentage, based on <a href="http://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement" target="_blank">The Shockingly Simple Math Behind Early Retirement</a>.</h3><p>Send an email to <a href="mailto:parse-mint@dsernst.com">parse-mint@dsernst.com</a> to get started.</p>')
})

app.post('/', function (req, res) {
  // console.log(req.body)
  res.sendStatus(200)
  handleEmail(req.body)
})

var server = app.listen(3000, function () {
  console.log('Server listening at http://' + server.address().address + ':' + server.address().port)
})
