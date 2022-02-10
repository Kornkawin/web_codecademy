const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (val) => {
  console.log(val);
};

const handleFailure = (val) => {
  console.log(val)
};

// checkInventory(order).then(handleSuccess, handleFailure);
checkInventory(order).then(handleSuccess).catch(handleFailure);   // more clean code

/*
  Output:
    Thank you. Your order was successful.

  Breaking down:
    1. checkInventory() takes in an array representing an order and returns a promise.
    2. If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
    3. Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".
    4. We pass two handler functions to .then():
      The first will be invoked with 'Thank you. Your order was successful.' if the promise resolves,
      The second will be invoked with 'We're sorry. Your order could not be completed because some items are sold out' if the promise rejects.
*/
