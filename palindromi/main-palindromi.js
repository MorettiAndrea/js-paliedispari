function reversedWord(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
const choosedWord = prompt("Inserisci una parola");
console.log(choosedWord);
console.log(reversedWord(choosedWord));

if (choosedWord === reversedWord(choosedWord)) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}
