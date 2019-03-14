//declare a function and name it, isIsogram
function isIsogram(str){
//declare a variable names strK and assign it a method
  var strK = str.toLowerCase();
//Declare a loop to loop through the array of characters in each word
    for(var i = 0;i<strK.length;i++){
      for(var j = i+1;j<strK.length;j++){
//Declare a conditional statement that will compare the data types and values in i and j to return false if the characters iterate an equal amount of times within the array
      if(strK[i]===strK[j]) return false;
      }
    }
//return true if not
  return true;
}
