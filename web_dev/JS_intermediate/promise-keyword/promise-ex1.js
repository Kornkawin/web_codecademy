/*
  The Promise constructor method takes a function parameter called the "executor function"
  which runs automatically when the constructor is called. The executor function generally
  starts an asynchronous operation and dictates how the promise should be settled.

  The executor function has two function parameters, usually referred to as
  the resolve() and reject() functions. When the Promise constructor runs,
  JavaScript will pass "its own resolve() and reject() functions" into the executor function.

  resolve() will change the promise’s status from pending to fulfilled, and the promise’s
  resolved value will be set to the argument passed into resolve():

  resolve('Sunglasses order processed.'); // return Promise{ 'Sunglasses order processed.' };

  reject() will change the promise’s status from pending to rejected, and the promise’s
  rejection reason will be set to the argument passed into reject():

  reject("That item is sold out."); // return Promise{ <rejected> 'That item is sold out.' }
*/

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject("That item is sold out.");
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();

console.log(orderPromise);
