                                // **** UNIT 2 REVIEW **** //


// Write a function `nextTwoPrimes(num)` that takes in a number `num` and returns the
// next two prime numbers greater than `num`.
//
// Examples:
// nextTwoPrimes(2); // => [ 3, 5 ]
// nextTwoPrimes(3); // => [ 5, 7 ]
// nextTwoPrimes(7); // => [ 11, 13 ]
// nextTwoPrimes(8); // => [ 11, 13 ]
// nextTwoPrimes(20); // => [ 23, 29 ]
// nextTwoPrimes(97); // => [ 101, 103 ]

function nextTwoPrimes(num) {
  var nextPrimes = [];
  for (var i = num; i < num + 20; i += 1) {
    if (isPrime(i)) {
      nextPrimes.push(i);
    }

  }
  return nextPrimes.slice(1,3);
  
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i += 1) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}


// Write a function elementCount(array) that returns a object. Each key
// corresponds to an element in the array and the value corresponds to how many
// times that element appears in the array.
//
// Example:
// elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }


function elementCount(array) {
    var countObj = {};
  
    for (var i = 0; i < array.length; i++) {
      var key = array[i];
  
      if (countObj[key] === undefined) {
        countObj[key] = 1;
      } else {
        countObj[key]++;
      }
    }
  
    return countObj;
  }



// Write a function `longWordCount(string)` that takes in a string and returns the
// number of words longer than 7 characters.
//
// Examples:
//
// longWordCount(""); // => 0
// longWordCount("short words only"); // => 0
// longWordCount("one reallylong word"); // => 1
// longWordCount("two reallylong words inthisstring"); // => 2
// longWordCount("allwordword longwordword wordswordword"); // => 3
// longWordCount("seventy schfifty five"); // => 1


function longWordCount(string) {
    var count = 0;
    var words = string.split(" ");
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
      if (word.length > 7 ) {
        count += 1;
      }
    }
    return count;
}


// Write a function `factorial(n)`, that returns the factorial of the number `n`.
// For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.
//
// Examples:
//
// factorial(1); // => 1
// factorial(4); // => 24
// factorial(5); // => 120
// factorial(10); // => 3628800

function factorial(n) {
    var prod = 1;
    for (var i = 1; i <= n; i += 1) { 
      
      prod *= (i);
    }
    return prod;
}

// Write a function lcm(num1, num2) that returns the lowest number which is a
// multiple of both num1 and num2.
//
// Examples:
//
//lcm(2, 3); // => 6
//lcm(6, 10); // => 30
//lcm(24, 26); // => 312

function lcm(num1, num2) {
    var finalMultiple = num1 * num2;
    var multiples = [];
    for (var i = 1; i <= finalMultiple; i += 1) {
      if (i % num1 === 0 && i % num2 === 0 ) {
        multiples.push(i);
      }
    }
    multiples.sort;
    return multiples[0];
}

// Write a function `hipsterfy(sentence)` that takes takes a string containing
// several words as input. Remove the last vowel from each word. `'y'` is not a vowel.
//
// Examples:
//
// hipsterfy("proper"); // => "propr"
//hipsterfy("proper tonic panther"); // => "propr tonc panthr"
//hipsterfy("towel flicker banana"); // => "towl flickr banan"
//hipsterfy("runner anaconda"); // => "runnr anacond"
 //hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"

 function hipsterfy(sentence) {
    var words = sentence.split(" ");
    var new_words = [];
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
      new_words.push(removeLastVowel(word));
    } 
    return new_words.join(" ");
  }
  
  
  
  
  function removeLastVowel(word) {
    var new_word = "";
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = word.length - 1; i >= 0; i -= 1) {
      var char = word[i];
  
      if (vowels.indexOf(char) > -1) {
       return word.slice(0, i) + word.slice(i + 1);
      }
    }
}

// Write a function `threeInARow(arr)` that takes in an array of numbers and returns
// true if the array contains 3 of the same number consecutively. The function should
// return false otherwise.
//
// Examples:
// 
// threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
// threeInARow([10, 9, 20, 33, 3, 3]); // => false;
//  threeInARow([10, 9, 20, 33, 3, 3]); // => false;

function threeInARow(arr) {
  for (var i = 0; i < arr.length - 2; i += 1) {
    var currentEle = arr[i];
    var secondEle = arr[i + 1];
    var thirdEle = arr[i + 2]; 
    if (currentEle === secondEle && currentEle === thirdEle){
      return true;
    }
  }
  return false; 
}

// Write a function `threeIncreasing(arr)` that takes in an array of numbers and returns
// true if the array contains 3 consecutive numbers in increasing order.
// The function should return false otherwise. Note that the 3 consecutive numbers should
// be increasing by 1, so the the second number is 1 greater than the first, and the third
// number is 1 greater than the second.
//
// Examples:

//threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
//threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false

function threeIncreasing(arr) {
  for (var i = 0; i < arr.length - 2; i += 1) {
    var currentEle = arr[i];
    var secondEle = arr[i + 1];
    var thirdEle = arr[i + 2]; 
    if (secondEle === currentEle + 1  &&  thirdEle === secondEle + 1){
      return true;
    }
  }
  return false; 
}

// Write a function called capVowels(string) that takes in a string and returns
// the string where every vowel is capitalized. All other letters should be lowercased.
// Hint: Don't forget that strings are immutable!
//
// Examples:
//
// capVowels('hello world'); // => 'hEllO wOrld'
// capVowels('HELLO WORLD'); // => 'hEllO wOrld'
// capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'

function capVowels(string) {
    var new_str = "";
    var vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"];
    for (var i = 0; i < string.length; i += 1) {
      var char = string[i];
  
      if (vowels.indexOf(char) > -1) {
        new_str += char.toUpperCase();

      }else {
        new_str += char.toLowerCase();
      }
    }
    return new_str;
}

// // Write a function `objectSize(obj)` that takes in an object and returns the number
// // of key-value pairs in the object.

// var obj1 = {
//   name: 'Fido',
//   age: '4'
// }
// objectSize(obj1); // => 2

// var obj2 = {
//   name: 'App Academy',
//   course: 'Bootcamp Prep',
//   locations: ['SF', 'NY']
// }
// objectSize(obj2); // => 3

function objectSize(obj) {
    var count = 0;
    for (var key in obj) {
      count += 1;
    }
    return count;
}

// Write a function `power(base, exp)` that takes in two numbers,
// a base and exponent. The function should return `base` raised to `exp` power.
// Solve this using a loop.
// For example, power(2, 5) is 2 raised to the 5th power,
// which is 2 * 2 * 2 * 2 * 2 = 32
//
// Examples:
//power(2, 5); // => 32
//power(2, 10); // => 1024
// power(9, 2); // => 81
// power(9, 3); // => 729
// power(11, 0); // => 1
// power(11, 1); // => 11

function power(base, exp) {
    var product = 1;
    for (var i = 0; i < exp; i += 1) {
      product *= base;
    }
    return product;
}

// Write a function `peakFinder(array)` that takes in an array of numbers.
// It should return an array containing the indices of all the peaks. A
// peak is an element that is greater than both of its neighbors. If it is
// the first or last element, it is a peak if it is greater than its one
// neighbor. Assume the array has a length of at least 2.
//
// Hint: this can be solved using a single loop
//
// Examples:
// peakFinder([1, 2, 3, 2, 1]); //=> [2]
// peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]

function peakFinder(array) {
    var peaks = [];
    for (var i = 0; i < array.length; i += 1) {
      if (i === 0 && array[i] > array[i + 1]) {
        peaks.push(i);
      }else if (array[i] === array[array.length - 1] && array[i] > array[i - 1]) {
        peaks.push(i);
      }else if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
        peaks.push(i);
      }
    }
    return peaks;
}

  
  





