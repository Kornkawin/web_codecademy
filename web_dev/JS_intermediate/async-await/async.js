/*
  async functions always return a promise. This means we can use traditional promise syntax,
  like .then() and .catch with our async functions.

  An async function will return in one of three ways:
  1. If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
  2. If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
  3. If a promise is returned from the function, it will simply return that promise
*/

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:
async function withAsync(num){
  if (num === 0){
    return 'zero';
  } else {
    return 'not zero';
  }
}
/* arrow style
const withAsync = async(num) => {
  if (num === 0){
    return 'zero';
  } else {
    return 'not zero';
  }
}
*/


withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})


/*
  Output:
    withConstructor(0) returned a promise which resolved to: zero.
    withAsync(100) returned a promise which resolved to: not zero.
*/
