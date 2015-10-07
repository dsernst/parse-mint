var _ = require('lodash')

exports.semiMonthlyToWeekly = function (semiMonthlyIncome) {
  // use this to calculate weekly income if you're paid twice a month
  // e.g. on the 1st and 15th of each month
  var monthlyIncome = semiMonthlyIncome * 2
  var annualIncome = monthlyIncome * 12
  var weeksPerYear = 365.25 / 7
  return _.round(annualIncome / weeksPerYear, 2)
}
