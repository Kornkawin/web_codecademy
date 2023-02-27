/*
  async functions are almost always used with the additional keyword 'await' inside the function body.

  await is an operator: it returns the resolved value of a promise. Since promises resolve in an
  indeterminate amount of time, await halts, or pauses, the execution of our async function until
  a given promise is resolved.
*/
const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();
