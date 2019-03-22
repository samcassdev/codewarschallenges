function XO(str) {

    str = str.toLowerCase();
    // console.log(str);
    var countX = 0;
    var countO = 0;

    for(var i=0; i<str.length; i++){
      if(str[i] === 'x'){
        countX++;
      } else if(str[i] === 'o'){
        countO++;
      }
    }

    if(countX === countO){
      return true;
    } else {
      return false;
    }
}
