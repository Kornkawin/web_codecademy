const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags]).then(onFulfill).catch(onReject);

/*
  Promise.all() accepts an array of promises as its argument and returns a single promise.
  That single promise will settle in one of two ways:
    1. If every promise in the argument array resolves, the single promise returned from
      Promise.all() will resolve with an array containing the resolve value from each
      promise in the argument array.
    2. If any promise from the argument array rejects, the single promise returned from
      Promise.all() will immediately reject with the reason that promise rejected.
      This behavior is sometimes referred to as failing fast.
*/
