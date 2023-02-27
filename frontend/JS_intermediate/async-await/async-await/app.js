/*
  The true beauty of async...await is when we have a series of asynchronous actions which depend
  on one another. For example, we may make a network request based on a query to a database.
  In that case, we would need to wait to make the network request until we had the results
  from the database.

  This syntax is easy to maintain and debug.
*/

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans(){
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

/*
output:
  I bought black beans because ther were on sale.
  Time to soak the beans.
  ... The black beans are softened.
  Time to cook the beans.
  ... The beans are cooked!


  Dinner is served!
*/
