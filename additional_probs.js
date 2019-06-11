// Write a function `moreDotLessDash(str)` that takes in a string and returns
// the true if the string contains more dots ('.') than dashes ('-'), false otherwise.
//
// Examples:
//
// moreDotLessDash('2-D arrays are fun. I think.'); // => true
// moreDotLessDash('.-.-.'); // => true
//  moreDotLessDash('.-'); // => false
// moreDotLessDash('..--'); // => false

function moreDotLessDash(str) {
    var dotCount = 0;
    var dashCount = 0;
    for (var i = 0; i < str.length; i ++) {
      var char = str[i];
      if (char === "-") {
        dashCount += 1;
      }
      if (char === ".") {
        dotCount += 1;
      }
    }
    if (dotCount > dashCount) {
      return true;
    }
    return false;
}

// Write a function `smallestPrime(array)` that takes in an array of numbers
// and returns the smallest prime number in the array.
//
// HINTS:
// - start by creating an `isPrime` helper function
// - the smallest prime number is 2
//
// Examples:

// var arr1 = [ 6, 7, 12, 11, 5, 4 ];
// smallestPrime(arr1); // => 5
//
// var arr2 = [11, -7, 7, 8, 6, 10];
// smallestPrime(arr2); // => 7

// var arr3 = [];
// smallestPrime(arr3); // => null
// 
// var arr4 = [4, 6, 8, 10];
// smallestPrime(arr4); // => null
//
function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (var i = 2; i < n; i ++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
  
  function smallestPrime(array) {
    var primes = [];
    for (var i = 0; i < array.length; i ++) {
      var ele = array[i];
      if (isPrime(ele)) {
        primes.push(ele);
      }
    }
    var sortedPrimes = primes.sort(function(a, b){return a-b});
    if (sortedPrimes.length === 0) {
      return null;
    } else {
      return sortedPrimes[0];
    }
  
}

// Write a function `toFeet(distances)` that takes in an array of distance strings.
// The given distances will either be in `feet` or `yards`.
// The function should return a new array where all the distances are converted
// to feet. There are 3 feet in 1 yard.
//
// // Examples:
// //
// var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
// toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
// //
// var arr2 = ['2 yards', '3 feet', '10 yards'];
// toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]

function toFeet(distances) { 
    var newDistances = [];
    for (var i = 0; i < distances.length; i ++) {
      var distance = distances[i];
      if (distance.indexOf("feet") > -1 ) {
        newDistances.push(distance);
      } else {
        newDistances.push(yardsToFeet(distance));
      }
    }
    return newDistances;
}
  
  function yardsToFeet(distance) {
    var yards = distance.split(0, 1);
    var yard = parseInt(yards, 10);
    var new_distance = "";
    var feet = yard * 3;
    new_distance = `${feet} feet`;
    return new_distance;
}

// Write a function `uncompressString(str)` that takes in a "compressed" string and
// returns the "uncompressed" version of the string. In the input `str`, every
// letter is followed by a single digit number that specifies how many times that
// character is repeated. See the examples.
//
// HINT: Use the built-in `Number` function to turn the string representation of
// a number into a number
// Number('42'); // => 42;
//
// Examples:
//
// uncompressString('a2b4c1'); // => 'aabbbbc'
// uncompressString('b1o2t1'); // => 'boot'
// uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
function uncompressString(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i ++) {
      var string = str[i];
      var num = str[i + 1];
      var new_strs = string.repeat(num);
      newStr += new_strs;
    }
    return newStr;
}
  

// Write a function winningHand(hand1, hand2) that takes in
// two strings representing a hand of 4 cards. Return
// the string of the hand with the higher total score. If there
// is a tie, return 'DRAW'. Possible cards are J, Q, K.
//
// J = 1 point
// Q = 2 points
// K = 3 points
//
// Examples:
//      
//  winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
// winningHand('KJKJ', 'QQQK'); // => 'QQQK'
// winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
// winningHand('KJKJ', 'QQQQ'); // => 'DRAW'

function winningHand(hand1, hand2) {
    var countHand1 = countCards(hand1);
    var countHand2 = countCards(hand2);
    if (countHand1 > countHand2) {
      return hand1;
    } else if (countHand1 === countHand2) {
      return "DRAW";
    } else {
      return hand2;
    }
}
  
  function countCards(hand) {
    var cards = {"J": 1, "Q": 2, "K":  3};
    var total = 0;
    for (var i = 0; i < hand.length; i ++) {
      var card = hand[i];
      total += cards[card];
    }
    return total;
}

// Write a function nickname(name) that takes in a name string and returns a
// string representing their nickname.
// A nickname is the name up to the second vowel repeated twice. See the examples.
//
// Examples:
//
// nickname('manuel'); // => 'MANU-MANU'
// nickname('pikachu'); // => 'PIKA-PIKA'
// nickname('bootcamp'); // => 'BOO-BOO'
// nickname('bob'); // => 'BOB-BOB'

function nickname(name) {
    var vowels = 'AEIOUaeiou'.split('');
    var vowelCount = 0;
  
    for (var i = 0; i < name.length; i += 1) {
      var char = name[i];
  
      if (vowels.indexOf(char) > -1) {
        vowelCount += 1;
        if (vowelCount === 2) {
          break;
        }
      }
    }
  
    var str = name.slice(0, i + 1).toUpperCase();
    return str.toUpperCase() + '-' + str.toUpperCase();
}

// Write a function tallyCount(array) that takes in an array of strings. 
// The function should return an object containing a tally count of the strings 
// in the array.
//
// Examples:
//
// var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
// tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
// //
// var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
// tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }

function tallyCount(array) {
    var count = {};
    for (var i = 0; i < array.length; i ++) {
      var ele = array[i];
      if (count[ele] === undefined) {
        count[ele] = "I";
      } else {
        count[ele] += "I";
      }
    }
    return count;
}

// Write a function oddOnesOut(array) that takes in an array of
// strings and returns a new array array containing only elements
// that appeared an even number of times in the input array.
//
// Examples:
//
// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
// oddOnesOut(arr1); // => [ 'b', 'd' ]
// //
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); // => [ 'fish' ]
function oddOnesOut(array) {
    var count = {};
    var oddsOut = [];
    for (var i = 0; i < array.length; i ++) {
      var ele = array[i];
      if (count[ele] === undefined) {
        count[ele] = 1;
      } else {
        count[ele] += 1;
      }
    }
    for (var key in count) {
      if (count[key] % 2 === 0) {
        oddsOut.push(key);
      }
    }
    return oddsOut;
}

// Write a function `maxAdjacentSum(array)` that takes in an array of numbers
// and returns the maximum sum of adjacent numbers in the array.
//
// HINT: First think how we can find adjacent elements in an array!
//
// Examples:
//
// var arr1 = [5, 6, 11, 3];
// maxAdjacentSum(arr1); // => 17
//
// var arr2 = [3, 2, 13, 5, 4, 7];
// maxAdjacentSum(arr2); // => 18
function maxAdjacentSum(array) {
    var largest = null;
  
    for (var i = 0; i < array.length - 1; i += 1) {
      var sum = array[i] + array[i + 1];
  
      if (largest === null || sum > largest) {
        largest = sum;
      }
    }
  
    return largest;
}
  

// Write a function `opposingSums(array)` that takes in an array of numbers and returns
// a new array containing half the number of elements. Assume the `array` contains
// an even number of elements.
//
// The first element of the new array should be the sum between the 1st and
// last element of the original `array`. The second element of the new array
// should be the sum between the 2nd and 2nd to last element. The third element
// of the new array should be the sum between the 3rd and 3rd to last element
// ... etc.
//
// Examples:
//
// var arr1 = [3, 2, 11, 4, 7, 9];
// opposingSums(arr1); // => [ 12, 9, 15 ]
//
// var arr2 = [1, 2, 3, 4]
// opposingSums(arr2); // => [ 5, 5 ]
function opposingSums(array) {
    var half = array.length / 2;
    var arr = [];
  
    for (var i = 0; i < half; i += 1) {
      var num1 = array[i];
      var num2 = array[array.length - 1 - i];
      var sum = num1 + num2;
  
      arr.push(sum);
    }
  
    return arr;
}

// function opposingSums(array) {
//     var opposing = [];
//     var firstHalf = array.length / 2;
//     var secondHalf = array.slice(array.length / 2);
//     for (var i = 0; i < firstHalf.length; i ++) {
//       var opposing_ele = secondHalf.reverse()[i];
//       opposing.push(firstHalf[i] + opposing_ele);
//     }
//     return opposing;
// }

// Write a function `censor(sentence, curseWords)` that censors the given sentence by
// replacing the vowels in curse words with "*". Assume no punctuation.
//
// Examples:
//
// var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
// result1; //=> "D*rn you Harold you son of a g*n"
//
// var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
// result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"


function censorWord(word) {
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < vowels.length; i += 1) {
      var vowel = vowels[i];
      word = word.split(vowel).join('*');
    }
  
    return word;
}
  
function censor(sentence, curseWords) {
    var words = sentence.split(' ');
    var newWords = [];
  
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
  
      if (curseWords.indexOf(word.toLowerCase()) === -1) {
        newWords.push(word);
      } else {
        newWords.push(censorWord(word));
      }
    }
  
    return newWords.join(' ');
}



// Write a function `greatestMap(ary, cb1, cb2)` which takes as an
// argument an array of numbers and two callbacks. It creates a new array
// with each element from ary "mapped" to a new element using whichever
// callback returns a larger mapped value. Both callbacks take as
// arguments the element, index, and array.
//
// Example 1:
//
// var ary1 = [1, 5, 10];

// function squareRootRounder(num) {
//   return Math.round(Math.sqrt(num));
// }

// function half(num) {
//   return num / 2;
// }

// greatestMap(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]

// Hint:

// squareRootRounder(1); //=> 1
// squareRootRounder(5); //=> 2
// squareRootRounder(10); //=> 3

function greatestMap(ary, cb1, cb2) {
  var greatest = [];
  for (var i = 0; i < ary.length; i += 1) {
    var ele = ary[i];
    if (cb1(ele) > cb2(ele)) {
      greatest.push(cb1(ele));
    } else {
      greatest.push(cb2(ele));
    }
  }
  return greatest;
}

// An isogram is a word with only unique, non-repeating letters.
// Given two isograms of the same length, return an array with two numbers
// indicating matches: the first number is the number of letters matched in both
// words at the same position, and the second is the number of letters matched in
// both words but not in the same position.
//
// Examples:
//
//  isogramMatcher("an", "at"); //=> [1, 0]
//  isogramMatcher("or", "go"); //=> [0, 1]
//  isogramMatcher("cat", "tap"); //=> [1, 1]
// // isogramMatcher("home", "dome"); //=> [3, 0]
//  isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
//  isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]

function isogramMatcher(str1, str2) {
  // var isograms = [];
  var countMatchIndex = 0;
  var countMatches = 0;
  for (var i = 0; i < str1.length; i ++) {
    var char = str1[i];
    if (char === str2[i]) {
      countMatchIndex += 1;
    }else if (str2.indexOf(char) > -1) {
      countMatches += 1;
    }
  }
  return [countMatchIndex, countMatches];

} 

// Write a function greatestCommonFactor(num1, num2) that returns the greatest
// common factor between num1 and num2. This means that the function should return
// the largest number that divides both num1 and num2.
//
// Examples:
//
// greatestCommonFactor(6, 10); // => 2
// // greatestCommonFactor(10, 15); // => 5
// // greatestCommonFactor(4, 7); // => 1
//  greatestCommonFactor(4, 8); // => 4
//  greatestCommonFactor(45, 30); // => 15

function greatestCommonFactor(num1, num2) {
  var factors = [];
  for (var i = 1; i < num2; i ++ ) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }
  var max = Math.max.apply(null, factors);
  return max;
}

// Write a function `additionSequence(array, seq)` that takes in an array of numbers
// and a sequence of numbers. The function should return a new array where numbers
// of the original array are added to the numbers in the sequence.
// See the following example.
//
// array = [3, 2, 5, 4, 2, 1, 10];
// sequence = [2, 4, 6];
//
// array:    3 2  5 4 2 1 10
// sequence: 2 4  6 2 4 6  2
// result:   5 6 11 6 6 7 12
//
//
// Examples:
//
// var arr1 = [3, 2, 5, 4, 2, 1, 10];
// var seq1 = [2, 4, 6];
// additionSequence(arr1, seq1);
// // => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2] => [ 5, 6, 11, 6, 6, 7, 12 ]
//
// var arr2 = [1, 2, 3, 4, 5, 6, 7];
// var seq2 = [1, 2];
// additionSequence(arr2, seq2); // => [ 2, 4, 4, 6, 6, 8, 8 ]

function additionSequence(array, sequence) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      var num = array[i];
      var offset = sequence[i % sequence.length];
      newArray.push(num + offset);
    }
  
    return newArray;
}

// Write a function fibonacci(n) that takes in a number that
// represents the length of a sequence. The function should
// should return the first `n` numbers in the fibonacci sequence.
//
// The first two numbers of the fibonacci sequence are 1 and 1.
// The next number in the sequence can be found by adding the
// last two numbers in the sequence.
//
// Examples:
//
// fibonacci(0); // => []
//  fibonacci(1); // => [ 1 ]
//  fibonacci(2); // => [ 1, 1 ]
//  fibonacci(3); // => [ 1, 1, 2 ]
// // fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
// fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

function fibonacci(n) {
  var seq = [1, 1];
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  }

  for (var i = 2; i < n; i += 1) {
      var sum =  seq[seq.length - 1] + seq[seq.length - 2];
      seq.push(sum);
  }
  return seq;
}

// Write a function shiftChars(word, num) that takes in a
// lowercase string and a number.
// The function should return a string where every character
// of the word is shifted `num` times in the alphabet.
// Examples:
// shiftChars('able', 1); // => 'bcmf'
//  shiftChars('apple', 2); //=> 'crrng'
// // shiftChars('bootcamp', 3); //=> 'errwfdps'
//  shiftChars('zebra', 5); //=> 'ejgwf'
function shiftChars(word, num) {
  var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  var newStr = "";
  for (var i = 0; i < word.length; i ++) {
    var char = word[i];
    var alphaIdx = alphabet.indexOf(char) + num;
    var newChar = alphabet[alphaIdx];
    if (char === "z") {
      newStr += (alphabet[alphaIdx % alphabet.length]);
    } else {
      newStr += newChar;
    }
  }
  return newStr;

}

// Write a function `isSorted(array)` that takes in an array of numbers and returns
// true if the elements of the array are in increasing sorted order and returns false
// if the elements are not in increasing order.
//
// Examples:
//
// isSorted([3, 5, 11, 9, 15, 16]); // => false
//  isSorted([3, 5, 11, 13, 15, 16]); // => true
// isSorted([9, 4, 1, 5, 6, 2]); // => false
// isSorted([1, 2, 4, 5, 6, 9]); // => true

function isSorted(array) {
  for (var i = 0; i < array.length; i ++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}


// Write a function safeSpeedChange(speeds) that takes in an array of speed numbers.
// The function should return true if consecutive speeds in the array differ
// by no more than 5, false otherwise.
//
// Examples:
//
// safeSpeedChange([3, 3, 2, 6, 8, 7]); //=> true
// safeSpeedChange([3, 3, 2, 6, 12, 10]); // => false
// safeSpeedChange([8, 10, 4, 3, 2]); // => false

function safeSpeedChange(speeds) {

  for (var i = 0; i < speeds.length - 1; i += 1) {
    var diff = speeds[i + 1] - speeds[i];

    if (Math.abs(diff) > 5) {
      return false;
    }
  }

  return true;
}
  
// Write a function isUniqueAnagram(word1, word2) that
// takes in two strings. The function should return true
// if the strings are anagrams of each other, false otherwise.
// Anagrams are strings that contain the same characters,
// but not necessarily in the same order. Assume there
// will be no repeated characters in each input string.
//
// Examples:
//
//  isUniqueAnagram('iceman', 'cinema'); // => true
//   isUniqueAnagram('abcd', 'adcb'); // => true
//   isUniqueAnagram('abcd', 'adxb'); // => false
//  isUniqueAnagram('abcd', 'abcdx'); // => false

function isUniqueAnagram(word1, word2) {
  for (var i = 0; i < word1.length; i += 1 ) {
    var char = word1[i];
    if (word2.indexOf(char) === -1) {
      return false;
    }
  }
  for (var i = 0; i < word2.length; i += 1 ) {
    var char = word2[i];
    if (word1.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}


// Write a function removeNthLetter(word, n) that takes in
// a string and an index `n`. The function should return
// that word with the character at index `n` removed.
//
// Examples:
// //
// removeNthLetter('bootcamp', 0); // => 'ootcamp'
// // removeNthLetter('bootcamp', 6); // => 'bootcap'
//  removeNthLetter('bootcamp', 4); // => 'bootamp'
//  removeNthLetter('computer', 3); // => 'comuter'

function removeNthLetter(word, n) {
  var newStr = "";
   for (var i = 0; i < word.length; i += 1) {
     if (i !== n) {
       newStr += word[i];
     }
   }
  return newStr;
} 

// Write a function alternateCase(str) that takes in a word and
// returns the word where the characters alternate between
// uppercase and lowercase.
//
// Examples:
//
//  alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
// alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
//  alternateCase('hello'); // => 'HeLlO'

function alternateCase(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i += 1) {
    if (i % 2 == 0) {
      newStr += (str[i].toUpperCase());
    } else {
      newStr += (str[i].toLowerCase());
    }
  }
  return newStr;
}
// Write a function stopWatch(totalSeconds) that takes in a
// number of seconds. The function should return the time string based
// on that number of seconds. The time should be formatted in
// hours (H), minutes (M), and seconds(S) in the form HH:MM:SS.
//
// Hint: the seconds and minutes count of the time should never
// be greater than 59. How can we use modulo % to accomplish this?
//
// Examples:
//
// stopWatch(0); // => '00:00:00'
// stopWatch(4); // => '00:00:04'
// stopWatch(128); // => '00:02:08'
// stopWatch(1234); // => '00:20:34'
// stopWatch(3612); // => '01:00:12'
// stopWatch(7640); // => '02:07:20'
// stopWatch(86400); // => '24:00:00'
// stopWatch(86522); // => '24:02:02'
// stopWatch(99999); // => '27:46:39'

function showDoubleDigits(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return String(num);
  }
}

function stopWatch(totalSeconds) {
  var secCount = totalSeconds % 60;
  var minCount = Math.floor(totalSeconds / 60) % 60;
  var hourCount = Math.floor(totalSeconds / 3600);
  var timeStr = showDoubleDigits(hourCount) + ':' + showDoubleDigits(minCount) + ':' + showDoubleDigits(secCount);

  return timeStr;
}


// Write a function `tripletSum(array, sum)` that takes in an array of numbers (array)
// and a number (sum). The function should return an array containing unique
// triplets of numbers from the array that equal `sum` when added together. 
// Assume that the input array contains no repeated numbers.
//
// Example:
//
// var arr1 = [1, 3, 5, 2, 4];
// tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]

function tripletSum(array, sum) {
  var triplets = [];

  for (var i = 0; i < array.length; i++) {
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j++) {
      var num2 = array[j];

      for (var k = j + 1; k < array.length; k++) {
        var num3 = array[k];

        if (num1 + num2 + num3 === sum) {
          triplets.push([num1, num2, num3]);
        }
      }
    }
  }

  return triplets;
}