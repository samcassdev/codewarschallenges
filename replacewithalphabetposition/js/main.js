function alphabetPosition(text) {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  text = text.toLowerCase().split('');
  result = [];
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (text[i] == alphabet[j]) {
        result.push(j+1);
      }
    }
  }
  return (result.join(' '));
}
