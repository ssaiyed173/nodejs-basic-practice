const util = require('./utility')
require('./account-service')


retirementAccountBalance = 40000
let totalBalance = util.sum([checkingAccountBalance,savingBankAccountBalance,retirementAccountBalance])
console.log(totalBalance)