/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
  let newArr = str.split(' ');
  let wordLength = 0;
  console.log(newArr);
  for(let i=0; i< newArr.length; i++) {
    if (newArr[i].length > wordLength) {
      wordLength = newArr[i].length;
    }
  }
  console.log(wordLength);
  return wordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
