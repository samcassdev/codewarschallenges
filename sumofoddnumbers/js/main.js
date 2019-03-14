function rowSumOddNumbers(n) {
  let holdOddNumbers = 1;
  let sumOfOddNumbers = 0;
  let numsSkipped = 0;

  //loop for how many numbers to skip
  for (let i = 1; i <= n-1; i++) {
    numsSkipped = numsSkipped + i
  }

  //write a loop that runs numsSkipped times
  for (let i = 0; i < numsSkipped; i++) {
    holdOddNumbers = holdOddNumbers + 2;
  }


  for (let i = 0; i < n; i++){
    sumOfOddNumbers = holdOddNumbers + sumOfOddNumbers;
    holdOddNumbers = holdOddNumbers + 2;
  }

  return sumOfOddNumbers;
}
