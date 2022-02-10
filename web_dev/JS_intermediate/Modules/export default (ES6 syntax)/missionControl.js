/*
  ES6 module syntax also introduces the import keyword for importing objects.
*/

import Airplane from './airplane';

const displayFuelCapacity = () => {
  Airplane.availableAirplanes.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
}

displayFuelCapacity();
