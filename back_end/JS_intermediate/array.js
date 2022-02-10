let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// print length of array
console.log(secretMessage.length);

// remove the last string of array
secretMessage.pop();
console.log(secretMessage.length);

// add to the end of array
secretMessage.push('to', 'Program');
console.log(secretMessage.length);

// change string by index array
secretMessage[secretMessage.indexOf('easily')] = 'right';
console.log(secretMessage.indexOf('right'));

// remove the first string of array
secretMessage.shift();

// add to the beginning of array
secretMessage.unshift('Programming');

// remove string from array and replace with 'know'
secretMessage.splice(6, 5, 'know');

// join string from array
console.log(secretMessage.join(' '));
console.log(secretMessage);

// we can add key-value pair to array
let test = ['Learning', 'is', 'not'];
test['3d'] = 'a'
console.log(test)