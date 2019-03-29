//declare function getCount, add parameter str
function getCount(str) {
//reassign the value of str to lowercase letters with the toLowerCase method
  str = str.toLowerCase();
//declare a variable, vowels and assign the variable string aeiou representative of all of the vowel letters
  let vowels = 'aeiou';
//let the vowel count start at 0 by declaring the variable vowelCount and assigning it 0
  let vowelCount = 0;
//let the iteration start at 0, also iterating for each time that it is less than the length of str, and continue to iterate through for each time this is true
  for(let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
}
