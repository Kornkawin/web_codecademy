/*
ES6 introduced a second common approach to export modules. In addition to export default,
named exports allow us to export data through the use of variables.

let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};
export { specialty, isVegetarian };

specialty and isVegetarian are exported, while isLowSodium is not exported,
since it is not specified in the export syntax.
*/

// let availableAirplanes = [
//   {
//     name: 'AeroJet',
//     fuelCapacity: 800,
//     availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
//   },
//   {
//     name: 'SkyJet',
//     fuelCapacity: 500,
//     availableStaff: ['pilots', 'flightAttendants']
//   }
// ];
//
// let flightRequirements = {
//   requiredStaff: 4
// };
//
// function meetsStaffRequirements(availableStaff, requiredStaff) {
//   const check = (availableStaff.length >= requiredStaff) ? true : false;
//   return check;
// }
//
// export{availableAirplanes, flightRequirements, meetsStaffRequirements};



/*
Moreover, Named exports are also distinct in that they can be exported
as soon as they are declared, by placing the keyword export in front of
variable declarations.

export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};

We no longer need an export statement at the bottom of our file,
since this behavior is handled above.
*/

export let availableAirplanes = [
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

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  const check = (availableStaff.length >= requiredStaff) ? true : false;
  return check;
}

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return (range > requiredSpeedRange) ? true : false
}
