/*
Node.js style: const MessageMixer = require('./messageMixer.js');
*/
import MessageMixer from './messageMixer'; // ES6 syntax

function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(MessageMixer.reverseWord("What is the color of the sky?"));
  console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
  console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(MessageMixer.encode("What is the color of the sky?"));
  console.log(MessageMixer.cpalindrome("What is the color of the sky?"));
  console.log(MessageMixer.pigLatin("What is the color of the sky?", 't'));
};

displayMessage();
