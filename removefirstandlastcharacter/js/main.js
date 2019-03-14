//Declare a function with one paramater (str)
function removeChar(str){
//Declare a variable and have that variable hold a method
stringArray = str.split('');
//Remove the first letter from the array
  stringArray[0]='';
// Remove the last last letter from the array
  stringArray[str.length-1]='';
//Return the string that now has removed the first and last characters
  return stringArray.join('');
};
