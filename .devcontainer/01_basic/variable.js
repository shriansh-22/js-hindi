const accountId = 1234567
let accountEmail = "abcd@gmail.com"
var accountPassword = "654321"
accountCity = "jaipur"
let accountState;


// accountId will not change 
// avoid using var because it have problem of block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])