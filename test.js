console.log("hello")
const accountid = 1234567890
let accountEmail= "user@example.com"
var accountName = "John Doe"
let accountState ; // This variable is declared but not initialized, it will be undefined
console.log("Account ID:", accountid)
console.log("Account Email:", accountEmail)
console.log("Account Name:", accountName)
const accountPhone = "123-456-7890"

// accountPhone = "123-456-7890" // This will cause an error because accountPhone is a constant
console.log("Account Phone:", accountPhone)
console.table({accountid, accountEmail, accountName, accountPhone, accountState})
