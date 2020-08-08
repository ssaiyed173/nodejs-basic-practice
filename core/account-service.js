const util = require('./utility')

let checkingAccountBalance = 200
let savingBankAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance = util.sum([checkingAccountBalance,savingBankAccountBalance,retirementAccountBalance])
console.log(totalBalance)