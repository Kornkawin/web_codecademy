/*
  All promises’ asynchronous operations can be run simultaneously.

  Within our async functions we should still take advantage of concurrency,
  the ability to perform asynchronous actions at the same time.
*/

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinner() {
 const vegetablePromise = steamBroccoli();
 const starchPromise = cookRice();
 const proteinPromise = bakeChicken();
 const sidePromise = cookBeans();
 // All promises are constructed without using await. We then await each of their resolutions to print them to the console.
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner()
