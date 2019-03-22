function oddOrEven(array) {
  let count = 0
  if(array.length === 0){
    return 'even'
  }

  for(let i = 0; i<array.length; i++){
    count += array[i]
  }

  if(count % 2 === 0){
    return 'even'
  } else {
    return 'odd'
  }
}
