var _ = require('lodash')
var users = _.indexBy(require('./users.js'), 'emailAddress')
require('dotenv').load()
var Mailgun = require('mailgun').Mailgun
var mg = new Mailgun(process.env.MAILGUN_KEY)

function parseEmail(reqBody) {
  var emailAddress = reqBody.sender
  var body = reqBody['body-plain']
  // console.log(body)
  var weeklySpentPrefix = 'You spent $'
  var weeklySpentSuffix = ' over the past 7 days.'
  var weeklySpent = body.split(weeklySpentPrefix)[1].split(weeklySpentSuffix)[0]
  console.log('emailAddress:', emailAddress)
  console.log('weeklySpent:', weeklySpent)
  getStats(emailAddress, weeklySpent)
}

function getStats(emailAddress, weeklySpent) {
  var user = users[emailAddress]

  if (_.isUndefined(user)) {
    console.error('User ' + emailAddress + ' not found.')
    return
  }

  console.log('user:', user)

  var percentageSaved = (user.weeklyIncome - weeklySpent) / user.weeklyIncome
  percentageSaved = _.round(percentageSaved * 100)
  console.log('percentageSaved:', percentageSaved + '%')
  sendMessage(user.deliveryAddress, percentageSaved)
}

function sendMessage(recipient, percentageSaved) {
  mg.sendText(
    'auto@parse-mint.dsernst.com',
    [recipient, 'testing-parse-mint@dsernst.com'],
    'Stache Calculator',
    'You saved ' + percentageSaved + '% last week.',
    function (err) {
      if (err) {
        console.error(err)
      } else {
        console.log('mg.sendText successful.')
      }
    }
  )
}

// parseEmail(require('./sample-body.js'))
module.exports = parseEmail
