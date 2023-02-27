let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (const letter of input) {
  //console.log(letter);
  for (const vowel of vowels) {
    //console.log(vowel);
    if (letter === vowel) {
      resultArray.push(letter);
      if (letter === 'e' || letter === 'u') {
        resultArray.push(letter);
      };
      break;
    };
  };
};
console.log(resultArray.join('').toUpperCase());


// for...in ได้ key
// for...of ได้ value