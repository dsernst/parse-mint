function parseEmail(reqBody) {
  var emailAddress = reqBody.sender
  var body = reqBody['body-plain']
  // console.log(body)
  var weeklySpentPrefix = 'You spent $'
  var weeklySpentSuffix = ' over the past 7 days.'
  var weeklySpent = body.split(weeklySpentPrefix)[1].split(weeklySpentSuffix)[0]
  console.log('emailAddress:', emailAddress)
  console.log('weeklySpent:', weeklySpent)
}

parseEmail(require('./sample-body.js'))
