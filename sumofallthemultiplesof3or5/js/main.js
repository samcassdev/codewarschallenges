//declare a function, findSum, and include one paramenter for the number, n
function findSum(n) {
//declare a variable, product, and add 1 to it later later, product holds the number 0
 let product = 0;
//declare a for loop so numbers divisible by 3 and 5 may iterate
  for(let i = 3; i <= n; i++){
//if the number, n, is divisible by 3 or 5 - conditional statement
    if(i % 3 === 0 || i % 5 === 0){
//add 1 (product) to i
      product += i;
    }
  }
//return the product
  return product;
}
