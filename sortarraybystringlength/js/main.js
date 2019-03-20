//declare a function named sortByLength
function sortByLength (array) {
//return an array containing the same strings, ordered from shortest to longest
 return array.sort((a, b) => a.length - b.length);
};
