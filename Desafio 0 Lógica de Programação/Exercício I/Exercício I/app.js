/* 
Escreva uma função que, dado um número inteiro n, 
retorne uma lista de n strings de tal forma que a string i contém i asteriscos. 
Por exemplo, para n=5, a lista retornada seria ["*", "**", "***", "****", "*****"].
 */

function generateAsteriskStrings(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push("*".repeat(i));
  }
  return result;
}

console.log(generateAsteriskStrings(5));
console.log(generateAsteriskStrings(6));
console.log(generateAsteriskStrings(7));
console.log(generateAsteriskStrings(8));
console.log(generateAsteriskStrings(9));
