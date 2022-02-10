/*
To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.
*/
import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};
displayStaffStatus();


const displayFuelCapacity = () => {
  availableAirplanes.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
};
displayFuelCapacity();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();
