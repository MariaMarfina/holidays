// 1. Find The Parity Outlier 
// Solution: https://www.codewars.com/kata/reviews/565349bca24428f2870000a9/groups/5e10f6df4ebc2000015bf3cd
function findEven(integers) {
  return integers.filter(function(a) {
    return a % 2 === 0
  });
}

function findOdd(integers) {
  return integers.filter(function(a) {
    return a % 2 !== 0
  });
}

function findOutlier(integers) {
  var evenArr = findEven(integers);
  var oddArr = findOdd(integers);
  if (evenArr.length === 1) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
}

// 2. Exes and Ohs
// Solution: https://www.codewars.com/kata/reviews/55908ab5932c2fc59f000070/groups/5e10f9e18c89df000182dba0
function findLetter(strArr, letterToFind) {
  return strArr.filter(function(letter) {
    return letter === letterToFind;
  });
}

function XO(str) {
  var strArr = str.toLowerCase().split('');
  var x = findLetter(strArr, 'x');
  var o = findLetter(strArr, 'o');
  return x.length === o.length;
}

// 3. Shortest Word
// Solution: https://www.codewars.com/kata/reviews/57cec2caf0fe9cd5df000072/groups/5e10facd4ebc2000015bf418
function findShort(s) {
  sArr = s.split(' ');
  shortestItemLen = sArr[0].length;
  sArr.forEach(function(item) {
    if (item.length < shortestItemLen) {
      shortestItemLen = item.length;
    }
  })
  return shortestItemLen;
}

// 4. Vowel Count
// I cannot send a link to my solution because of Codewars' bug (https://github.com/Codewars/codewars.com/issues/1683)
function getCount(str) {
  var vowelsCount = 0;
  var strArr = str.split('');
  strArr.forEach(function(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

// 5. List Filtering
// Solution: https://www.codewars.com/kata/reviews/5411f7ec17dc0b7b7e000231/groups/5e1100cf884174000188eeee
function filter_list(l) {
  return l.filter(function(character) {
    return Number.isInteger(character);
  })
}

// 6. Isograms
// Solution: https://www.codewars.com/kata/reviews/54cd002407ba21e38f00000f/groups/5e1101328c89df000182dc0d
function isIsogram(str) {
  for (var i = 0; i < str.length; i++) {
    var indexOfSecondOccurence = str.toLowerCase().indexOf(str.toLowerCase().charAt(i), i + 1);
    if (indexOfSecondOccurence >= 0) {
      return false;
    }
  }
  return true;
}

// 7. Jarden Casing Strings
// Solution: https://www.codewars.com/kata/reviews/5390bac547d09b7da40006fd/groups/5e1101964225f300014be598
String.prototype.toJadenCase = function() {
  var capitalizedWords = this.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
};