/*
However, we can also take advantage of a destructuring technique called destructured assignment 
to save ourselves some keystrokes. In destructured assignment we create a variable with the name 
of an object’s key that is wrapped in curly braces { } and assign it to the object. 
*/

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  // 
  const {functionality} = robot;
  functionality.beep();
  const {beep} = robot.functionality;
  beep()