                                // **** UNIT 3 REVIEW **** //

// Write a function favoriteWord(favoriteLetter, sentence) that takes in a single letter
// and a sentence string. The function should return the word in the sentence that contains
// `favoriteLetter` the most. If there are ties, return the word that appears first
// in the sentence.
//
// Examples
//
// favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
//  favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
//  favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
//  favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''

function favoriteWord(favoriteLetter, sentence) {
    var words = sentence.split(" ");
    var countWords = {};
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
      countWords[word] = count(word, favoriteLetter);
    }
    
    var maxVal = 0;
    for (var key in countWords) {
      if (countWords[key] > maxVal) {
        maxVal = key;
      }else if (countWords[key] === 0) {
        return "";
      }
    }
    return maxVal;
  }
  function count(word, letter) {
    var count = 0;
    for (var i = 0; i < word.length; i += 1) {
      var char = word[i];
      if (char === letter) {
        count += 1;
      }
    }
    return count;
}
// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The
// function should return the length of the longest consecutive streak of the letters
// 'P' and 'Q'.
//
// Examples:
//
// mindPsAndQs('BOOTCAMP'); // => 1
// mindPsAndQs('APCDQQPPC'); // => 4
//  mindPsAndQs('PQPQ'); // => 4
//  mindPsAndQs('PPPXQPPPQ'); // => 5

function mindPsAndQs(str) {
    var longestStreak = 0;
    var currentStreak = 0;
  
    for (var i = 0; i < str.length; i += 1) {
      var char = str[i];
      if (char === 'P' || char === 'Q') {
        currentStreak += 1;
      } else if (longestStreak < currentStreak ) {
        longestStreak = currentStreak;
        currentStreak = 0;
      } else {
        currentStreak = 0;
      }
      if (i === str.length - 1 && longestStreak < currentStreak) {
        longestStreak = currentStreak;
      }
    }
    return longestStreak;
}
// Write a function commonFactors(num1, num2) that returns an array that contains
// the common factors for both numbers.
//
// Examples:
//
// commonFactors(12, 50); // => [ 1, 2 ]
//  commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22); // => [ 1, 11 ]
// commonFactors(45, 60); // => [ 1, 3, 5, 15 ]

function commonFactors(num1, num2) {
    var factors = [];
    for (var i = 0; i <= (num1 * num2); i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        factors.push(i);
      }
    }
    return factors;
}

// Write a function splitHalfArray(array) that takes in
// an array as an argument and returns two halves of that
// array split in the middle.
// If the array has an odd number of elements, then the middle
// element should be excluded.
//
// Example:
//
// splitHalfArray([1, 2, 3, 4, 5]); // => [ [ 1, 2 ], [ 4, 5 ] ]
// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

function splitHalfArray(array) {
    var splits = [];
  
    if (array.length % 2 === 0) {
      var midIndex = array.length / 2.0 
      splits.push(array.slice(0, midIndex), array.slice(midIndex))
    } else {
      splits.push(array.slice(0, midIndex), array.slice(midIndex + 1));
    }
  
    return splits;
}

  
// Write a function `commonPrimeFactors` that takes in two numbers as arguments
// and returns an array of all prime factors that are common between the
// two numbers. A factor is a number that divides another number without
// resulting in a remainder.
//
// Examples:
//
// commonPrimeFactors(12, 50); // => [ 2 ]
//  commonPrimeFactors(6, 24); // => [ 2, 3 ]
// // commonPrimeFactors(11,22); // => [ 11 ]
//  commonPrimeFactors(45, 60); // => [ 3, 5 ]
function isPrime(num) {
    if (num <  2) {
      return false;
    }
    for (var i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function commonPrimeFactors(num1, num2) {
    var factors = [];
    for (var i = 0; i <= (num1 * num2); i += 1) {
      if ((num1 % i === 0 && num2 % i === 0) && isPrime(i)){
        factors.push(i);
      }
    }
    return factors;
}

// Write a function objectSelect(obj, cb) which takes as arguments an 
// object and a callback, and returns a new object where all the key value 
// pairs return true, when passed into the callback.
//
// Example:
// 
// var obj = {
//   one: "one",
//   two: "something else",
//   three: "three",
//   four: "another thing."
// };
// function isEqual(a, b) {
//   return a === b;
// }
// var matchingPairs = objectSelect(obj, isEqual);
// matchingPairs; //=> { one: "one", three: "three" }

function objectSelect(obj, cb) {
    var newObj = {};
    for (var key in obj) {
      if (cb(key, obj[key])) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}

// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is replaced
// with the next vowel in the alphabet.
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// vowelShift('bootcamp'); // => 'buutcemp'
// vowelShift('hello world'); // => 'hillu wurld'
// vowelShift('on the hunt'); // => 'un thi hant'

function vowelShift(sentence) {
    var replace = {
      a: 'e',
      e: 'i',
      i: 'o',
      o: 'u',
      u: 'a'
    };
  
    var newSen = '';
  
    for (var i = 0; i < sentence.length; i += 1) {
      var char = sentence[i];
  
      if (replace[char] === undefined) {
        newSen += char;
      } else {
        newSen += replace[char];
      }
    }
  
    return newSen;
}
  
// Write a function oddWordsOut(sentence) that takes in a sentence string and returns
// the sentence where words with an odd number of characters are removed.
//
// Examples:
//
// oddWordsOut('go to the store and buy milk'); // => 'go to milk'
// oddWordsOut('what is the answer'); // => 'what is answer'

function oddWordsOut(sentence) {
    var oddWords = [];
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
  
      if (word.length % 2 === 0) {
        oddWords.push(word);
      }
    }
    return oddWords.join(" ");
}


// Write a function `hasAllVowels(str)` that takes in a string and returns true if
// the string contains every vowel (a, e, i, o, u) and false otherwise.
//
// Examples:
//
// hasAllVowels('have you gone biking?'); // => true
// hasAllVowels('get out of the way, silly'); // => true
// hasAllVowels('bootcamp prep'); // => false
// hasAllVowels('hello world'); // => false


function hasAllVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < vowels.length; i += 1) {
      if (str.indexOf(vowels[i]) === -1) {
        return false;
      }
    }
  
    return true;
}

// Write a function threeUniqueVowels(string) that takes in a string and returns true
// if the string contains at least three different vowels.
// Vowels are a, e, i, o, u
//
// Examples:
// 
// threeUniqueVowels('delicious'); // => true
//  threeUniqueVowels('bootcamp prep'); // => true
// //threeUniqueVowels('bootcamp'); // => false
//  threeUniqueVowels('dog'); // => false
//  threeUniqueVowels('go home'); // => false

function threeUniqueVowels(string) {
    var count = {};
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < string.length; i += 1) {
      var char = string[i];
      if ((count[char] === undefined) && (vowels.indexOf(char) > -1 )) {
        count[char] = 1;
      }else if ((count[char] !== undefined) && (vowels.indexOf(char) > -1 )) {
        count[char] += 1;
      }
    }
  
    var countOfcount = 0;
  
    for (var key in count) {
      countOfcount += 1;
    }
    if (countOfcount >= 3) {
      return true;
    }
    return false;
}


    //      SOLUTION       //

// function threeUniqueVowels(string) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var count = 0;
  
//     for (var i = 0; i < vowels.length; i += 1) {
//       var vowel = vowels[i];
//       if (string.indexOf(vowel) > -1) {
//         count += 1;
//       }
//     }
  
//     return (count >= 3);
// }


// Write a function `longestBigram(sentence)` that takes in a sentence string and returns
// the longest bigram in the sentence. A bigram is a pair of consecutive words.
// When returning the bigram, include the space between the words.
// Assume there will be no punctuation. In the case of a tie, return the earlier bigram.
//
// Examples:
//
// longestBigram('measure twice cut once'); // => 'measure twice'
// longestBigram("One must have a mind of winter"); // => 'must have'
//  longestBigram("go home to eat"); // => 'go home'
// longestBigram("his last assessment is fun"); // => 'last assessment'

function longestBigram(sentence) {
    var words = sentence.split(' ');
    var longest = '';
  
    for (var i = 0; i < words.length - 1; i += 1) {
      var word1 = words[i];
      var word2 = words[i + 1];
      var bigram = word1 + ' ' + word2;
  
      if (bigram.length > longest.length) {
        longest = bigram;
      }
    }
    return longest;
}

// Write a function `reverseHipsterfy(sentence)` that takes in a sentence and removes
// all vowels, except the last vowels of every word.
//
// Examples:
//
// reverseHipsterfy("proper"); // => 'prper'
// reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
// reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
// reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
// reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
// reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'

function indexOfLastVowel(word) {
    var vowels = 'aeiou';
  
    for (var i = word.length - 1; i >= 0; i--) {
      var char = word[i];
      if (vowels.indexOf(char) > -1) {
        return i;
      }
    }
  }
  
  function revHipWord(word) {
    var vowels = 'aeiou';
    var lastVowelIdx = indexOfLastVowel(word);
    var newWord = '';
  
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (vowels.indexOf(char) === -1 || i === lastVowelIdx) {
        newWord += char;
      }
    }
  
    return newWord;
  }
  
  function reverseHipsterfy(sentence) {
    var words = sentence.split(' ');
    var newWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var newWord = revHipWord(word);
      newWords.push(newWord);
    }
  
    return newWords.join(' ');
}
