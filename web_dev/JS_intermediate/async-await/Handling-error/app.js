const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try{
    let serve = await cookBeanSouffle()
    console.log(`${serve} is served!`);
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty()

/*
  Output:
    Fingers crossed... Putting the Bean Souffle in the oven
    Bean Souffle is served!
*/
