function pcNumber() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}
console.log("Il numero del pc", pcNumber);

const pariODispari = prompt("Scegli pari o dispari");
const playerNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log("Hai scelto", pariODispari);
console.log("Il tuo Numero", playerNumber);

if ((pcNumber + playerNumber) % 2 === 0 && pariODispari === "pari") {
  alert("Hai vinto!!!");
} else if ((pcNumber + playerNumber) % 2 !== 0 && pariODispari === "pari") {
  alert("Hai perso!!!");
} else if ((pcNumber + playerNumber) % 2 === 0 && pariODispari === "dispari") {
  alert("Hai perso!!!");
} else if ((pcNumber + playerNumber) % 2 !== 0 && pariODispari === "dispari") {
  alert("Hai Vinto!!!");
} else {
  alert("Ricontrolla gli input immessi");
}
