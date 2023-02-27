/*
While it’s better to avoid combining two methods of exporting, it is useful on occasion.
For example, if you suspect developers may only be interested in importing
a specific function and won’t need to import the entire default export.
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

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return (range > requiredSpeedRange) ? true : false
}

// Another way:
// export {availableAirplanes, flightRequirements, meetsStaffRequirements};
export default meetsSpeedRangeRequirements;
