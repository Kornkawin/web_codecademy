let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 20;

if (age>18 && registeredEarly) {
  raceNumber += 1000;
}
  
if (age>18 && registeredEarly) {
  console.log(`${raceNumber}` + ': Race at 9:30 am.');
} else if (age>18 && !registeredEarly) {
  console.log(`${raceNumber}` + ': Race at 11:00 am.');
} else if (age<18) {
  console.log(`${raceNumber}` + ': Race at 12:30 pm.');
} else {
  console.log('please see the registration desk.');
}