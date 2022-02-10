/*
  Here, we invoke setTimeout() with the callback function usingSTO() and 3000.
  In at least 3 seconds usingSTO() will be invoked.

  Output:
  This is the first line of code in app.js.
  This is the last line of code in app.js.
  Test
*/


console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log('Test');
};
setTimeout(usingSTO, 3000);
// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
