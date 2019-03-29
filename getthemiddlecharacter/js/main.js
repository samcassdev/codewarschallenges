function getMiddle(s){
  let middleLetters = '';

  if(s.length % 2 === 0){
    let even = s.length / 2
    return s.slice(even -1, even +1);

} if (s.length % 2 !== 0){
    let odd = s.charAt((s.length / 2))
    return odd;
 }
}
