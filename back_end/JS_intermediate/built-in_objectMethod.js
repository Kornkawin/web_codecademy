const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75,
    test: {
      test1: true,
      test2: false,
    }
  };
  
  /* 
     .hasOwnProperty(), 
     .valueOf() 
  */
  console.log(robot.hasOwnProperty('model')); // true
  console.log(robot.valueOf()); // { model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', energyLevel: 75 }
  console.log(robot)
  
  /* 
     Object.keys()
     - grab the property names, otherwise known as keys, and save the keys in an array.
  */
  const robotKeys = Object.keys(robot);
  console.log(robotKeys); // [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
  
  /* 
     Object.entries()
     - return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
  */
  const robotEntries = Object.entries(robot);
  console.log(robotEntries); // [ [ 'model', 'SAL-1000' ],[ 'mobile', true ],[ 'sentient', false ],[ 'armor', 'Steel-plated' ],[ 'energyLevel', 75 ] ]
  
  /* 
     Object.assign()
     - we want another object that has the properties of robot but with a few additional properties.
  */
  const newRobot = Object.assign(robot, {laserBlaster: true, voiceRecognition: true});
  console.log(newRobot); // { model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', energyLevel: 75, test: { test1: true, test2: false }, laserBlaster: true, voiceRecognition: true }