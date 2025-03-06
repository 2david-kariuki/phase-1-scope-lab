
window.customerName = "bob";

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer(newBest) {
  window.bestCustomer = newBest;
}
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new person'
}
