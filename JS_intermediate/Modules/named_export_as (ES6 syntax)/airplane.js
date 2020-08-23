/*
Named exports also conveniently offer a way to change the name of variables
when we export or import them. We can do this with the as keyword.

let specialty = '';
let isVegetarian = function() {
};
let isLowSodium = function() {
};
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
*/

let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  const check = (availableStaff.length >= requiredStaff) ? true : false;
  return check;
}

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return (range > requiredSpeedRange) ? true : false
}

export { availableAirplanes as aircrafts, flightRequirements as flightReqs,
  meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };
