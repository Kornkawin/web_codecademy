const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

/*
  Output:
    All of the items are in stock. The total cost of the order is 35.97.
    Payment processed with giftcard. Generating shipping label.
    The order has been shipped. The tracking number is: 379590.

  Breaking down:
    1. We invoke a function checkInventory(order) which returns a promise.
    2. We invoke .then() with an anonymous function as the success handler.
    3. Inside the success handler we return a new promise— the result of invoking a second function,
        processPayment() with the first promise’s resolved value.
    4. and so on.
*/
