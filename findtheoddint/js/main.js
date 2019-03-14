//Declare a function and include one paramter within that function
function findOdd(A) {
//Declare a variable and assign it to 0
 let count = 0;
//Declare a loop and assign the iteration equals to 0, is less than the length of the string, and continues to iterate thereafter
  for(let i = 0; i < A.length; i++) {
//I am doing the same thing for the second loop and iteration (j)
 for(var j = 0; j < A.length; j++) {
//Declare a conditional statement to compare the arrays iterated in both i and j
          if(A[i] == A[j]) {
//The count will increment each time we test this comparison
            count++;
          }
        }
//Declare a conditional statement that tests whether each count is *not* divisible by 2 by declaring that the value of the remainder is equal to the 1
    if (count % 2 == 1) {
//If true, return the array held in the first loop
        return A[i];
    }
  }
  count = 0;
}
