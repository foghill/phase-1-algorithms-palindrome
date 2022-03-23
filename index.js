function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split('').reverse().join('');
  return word === reverseWord
}

/* 
  Add your pseudocode here
take word and see if when you split the word in two, the inverse matches up, then split in half, then reverse the second one and see
if it's the same.

the split() method splits a String object into an array of strings by separating the string into sub strings

the reverse() methods reverses an array in place. the first array element becomes the last and the last becomes the first

the join() method joins all elements of an array into a string

then I can do an equality operator on the the reverse string against the original word

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
