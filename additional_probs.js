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
  
  