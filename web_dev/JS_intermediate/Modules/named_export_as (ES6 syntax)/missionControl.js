/*
To import named export aliases with the as keyword,
we add the aliased variable in our import statement.

import { chefsSpecial, isVeg } from './menu';

we have an option to alias an object that was not previously aliased when exported.
For example, the isLowSodium object that we exported could be aliased with
the as keyword when imported:

import {isLowSodium as saltFree} from 'Menu';



Another way of using aliases is to import the entire module as an alias:

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();
*/

import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

function displayStaffStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  });
};
displayStaffStatus();


const displayFuelCapacity = () => {
  aircrafts.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
};
displayFuelCapacity();

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();
