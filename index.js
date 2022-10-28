// 1) Sum Zero
function sumFinder(arr, num) {
    let obj = {}
    let diff

    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]

      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
//Time complexity - O(n), for loop for an array that we dont know how long the length is.
//Space complexity - O(n) - length of array will determine space taken

 console.log(sumFinder([1, 2, 3, -2], 0)); // true
 console.log(sumFinder([1, 2, 3, 4], 0)); // false

// 2) Unique Characters 

function uniqueCharacters(str){
    
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;

}
// Time complexity - O(n^2) brute force technique running 2 loops , if at any time both are the same, return false
// Space complexity - O(n) - depends on the length of string

console.log(uniqueCharacters("Monday")) // true
console.log(uniqueCharacters("Moonday")) // false

// 3) Pangram Sentence

function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = str.toLowerCase().replace(regex, "");

    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "false, not pangram";
     }
    }

   return "true, this is a pangram";
 }
// Time complexity is O(n)
// Space complexity O(n)
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// 4) Longest Word

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;

    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// time complexity - O(n) - for loop that depends on the length of the string
// space complexity -O(1)
