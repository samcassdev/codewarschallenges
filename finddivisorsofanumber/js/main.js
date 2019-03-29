//declared function getDivisorsCnt(n)
function getDivisorsCnt(n){
//declared variable divisors, assigned it 0
    var divisors = 0;
//integers = n
    integers = n;
//while loop for each time integers are greater than 0
    while (integers > 0){
//if n divided by integers has the remainder of 0 (therefore is divisible)
      if(n % integers === 0){
//increment divisors for every time this is true
        divisors++;
      }
//decrement integers for every time this is true
      integers--;
    }
//lastly, return the number of divisors of a positive integer
    return divisors;
}
//call the function to test for 500000
getDivisorsCnt(500000)
