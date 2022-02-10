/*
We can also wrap any collection of data and functions in an object, and export the object using module.exports.

anonymous function must be used for module.exports. (See displayAirplane())
*/
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
