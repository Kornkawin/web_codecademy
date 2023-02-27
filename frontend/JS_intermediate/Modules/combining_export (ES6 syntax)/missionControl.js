/*
  We can use an import keyword to import both types of variables
*/

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
import meetsSpeedRangeRequirements from './airplane';

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
