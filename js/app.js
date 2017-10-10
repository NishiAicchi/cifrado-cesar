/*Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números*/

do {
  var phrase = prompt("Hola, inserta una frase...");
}  while (!phrase) ;

var arr = phrase.split(" ");

function cipher (letterPosition, fixedValue)
  

