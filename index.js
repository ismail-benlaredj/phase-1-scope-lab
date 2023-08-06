// Write your solution in this file!

var customerName = "bob"
function upperCaseCustomerName() {
    customerName = customerName.toLocaleUpperCase()
}
function setBestCustomer() {
    globalThis.bestCustomer = 'not bob'
}

function overwriteBestCustomer(string) {
    bestCustomer = string
}

const leastFavoriteCustomer = "constant"
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "change"
}