/*
To make use of the exported module and the behavior we define within it,
we import the module into another file. In Node.js, use the require() function
to import modules.
*/

const Airplane = require('./module.exports.js'); // require(<module_name.js>);
const displayAirplane = (Airplane) => {
  console.log(Airplane.myAirplane);
};
displayAirplane(Airplane); // "StarJet"
