const _ = {
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    
    inRange(number, start, end) {
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      };
      if (start > end) {
        const temp = end;
        end = start;
        start = temp;
      }
      return start <= number && number < end; 
    },
  
    words(sentence) {
      const words = sentence.split(' ');
      return words
    },
  
    pad(str, desiredLength) {
      if (desiredLength <= str.length) {
        return str;
      } else {
        let padding = (desiredLength - str.length)/2;
        let startPad = Math.floor(padding);
        let endPad = startPad + (desiredLength - str.length)%2;
        const paddedString = ' '.repeat(startPad) + str + ' '.repeat(endPad)
        return paddedString; 
      };
    },
  
    has(obj, key) {
      const hasVal = typeof obj[key] !== 'undefined';
      return hasVal;
    },
  
    invert(obj) {
      const invertedObject = {};
      for (const [key, val] of Object.entries(obj)) {
        invertedObject[val] = key;
      };
      return invertedObject;
    },
  
    findKey(obj, test_fn) {
      for (const key in obj) {
        let value = obj[key];
        if (test_fn(value)) return key;
      };
      return undefined;
    },
  
    drop(arr, num) {
      if (typeof num === 'undefined') {
        num = 1;
      };
      return arr.slice(num);
    },
  
    dropWhile(arr, test_fn) {
      let start_index = arr.findIndex((element, index, arr) => {
        return !test_fn(element, index, arr);
      });
      return this.drop(arr, start_index);
    },
  
    chunk(arr, size) {
      if (typeof size === 'undefined') {
        size = 1;
      };
      const arrayChunks = [];
      for (let i=0; i<arr.length; i+=size) {
        let arrayChunk = arr.slice(i,i+size);
        arrayChunks.push(arrayChunk);
      };
      return arrayChunks;
    },
  
  };
  
  // Do not write or modify code below this line.
  module.exports = _;