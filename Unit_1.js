                                // **** UNIT 1 REVIEW **** //

// Write a function isInside(array, ele) that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false'

function isInside(array, ele) {
  if (array.indexOf(ele) >= 0 ) {
    return true;
  }else {
    return false;
  }
}
// Write a function luckySevens(max) that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
luckySevens(25); // => [ 7, 14, 21 ]
luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max) {
  var sevens = [];
  for (var i = 1; i <= max; i += 1) {
    if (i % 7 === 0) {
      sevens.push(i);
    }
  }
  return sevens;
}

// Write a function copyMachine(element, num) that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num) {
  var arr = [];
  for (var i = 0; i < num; i += 1) {
    arr.push(element);
  }
  return arr;
}
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

function reverseStr(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0 ; i -= 1) {
    newStr += str[i];
  }
  return newStr;
}

// Write a function everyOtherWord(sentence) that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]


function everyOtherWord(sentence) {
    var words = sentence.split(' ');
    var arr = [];
  
    for (var i = 0; i < words.length; i += 2) {
      var word = words[i];
      arr.push(word);
    }
  
    return arr;
}


// Write a function wordYeller(sentence) that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; => true


function wordYeller(sentence) {
    var yelledWords = [];
  
    var words = sentence.split(" ");
    var punctuation = ". , ! ? ; :".split(" "); 
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var lastCharacter = word.slice(-1);
  
      if (punctuation.indexOf(lastCharacter) !== -1) { 
        yelledWords.push(word);
      } else {                                        
        yelledWords.push(word + "!");
      }
    }
  
    return yelledWords.join(" ");
}



// Write a function `abbreviate(sentence)` that takes in a sentence string and
// returns a new sentence where words longer than 4 characters have their vowels
// removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'

function removeVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newWord = '';
  
    for (var i = 0; i < word.length; i += 1) {
      var char = word[i];
      if (vowels.indexOf(char) === -1) {
        newWord += char;
      }
    }
  
    return newWord;
  }
  
  function abbreviate(sentence) {
    var words = sentence.split(' ');
    var newWords = [];
  
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
  
      if (word.length >= 5) {
        newWords.push(removeVowels(word));
      } else {
        newWords.push(word);
      }
    }
  
    var newSen = newWords.join(' ');
    return newSen;
}

// Write a function `mirrorArray(array)` that takes in an array as an argument
// and returns a new array "mirrored" as shown in the examples:
//
// Examples:
//
// mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

function mirrorArray(array) {
    var newArray = [];
  
    for(var i = 0; i < array.length; i += 1) {
      var el = array[i];
      newArray.push(el);
    }
  
    for (var i = array.length - 1; i >= 0; i -= 1) {
      var el = array[i];
      newArray.push(el);
    }
  
    return newArray;
}

// Write a function `firstLastCap(sentence)` that takes in a sentence and returns a new
// sentence where the first and last letters of each word is uppercase. All other characters
// should be lowercase.
//
// Examples:
//
// firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
// firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'

function firstLastCap(sentence) {
    var words = sentence.split(' ');
    var newWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var firstChar = word[0].toUpperCase();
      var lastChar = word[word.length - 1].toUpperCase();
      var middleChars = word.slice(1, -1).toLowerCase()
      var newWord = firstChar + middleChars + lastChar;
      newWords.push(newWord);
    }
  
    return newWords.join(' ');
  }



  