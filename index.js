// Write your solution in this file!
var customerName = "bob"
const leastFavoritecustomer = 'tim'


function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    return function(){
        bestCustomer = 'not bob'
    }
}

console.log(setBestCustomer())

var overwriteBestCustomer = () => bestCustomer = 'maybe bob'
console.log(overwriteBestCustomer())

