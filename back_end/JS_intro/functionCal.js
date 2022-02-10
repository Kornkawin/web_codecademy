const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 7;
    } else if (day === 'friday') {
      return 5;
    } else if (day === 'saturday') {
      return 10;
    } else if (day === 'sunday') {
      return 8;
    }
    console.log('Error!');
  } 
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed.');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  }
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours(8));
  calculateSleepDebt();
  
  
  