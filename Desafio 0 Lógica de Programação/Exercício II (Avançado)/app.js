/* 
Exercício 2 (Avançado)
Dado um array de números inteiros, escreva uma função que retorne o par de números com a menor diferença absoluta. Se houver mais de um par com a mesma diferença, retorne todos eles em uma lista. Além disso, a função deve permitir os seguintes parâmetros opcionais: 

- allow_duplicates (booleano)
Se definido como False, os pares de números não podem conter valores duplicados.

- sorted_pairs (booleano)
Se definido como True, os pares no resultado devem estar ordenados em ordem crescente.

- unique_pairs (booleano)
Se definido como True, a função deve retornar apenas pares únicos (ou seja, (a, b) e (b, a) são considerados o mesmo par). 
 */
function findClosestPairs(
  arr,
  allow_duplicates = true,
  sorted_pairs = false,
  unique_pairs = false
) {
  if (arr.length < 2) return [];

  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  let pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[i] - arr[j]);

      if (diff < minDiff) {
        minDiff = diff;
        pairs = [[arr[i], arr[j]]];
      } else if (diff === minDiff) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  if (!allow_duplicates) {
    pairs = pairs.filter(([a, b]) => a !== b);
  }

  if (sorted_pairs) {
    pairs = pairs.map((pair) => pair.sort((a, b) => a - b));
  }

  if (unique_pairs) {
    const uniqueSet = new Set();
    pairs = pairs.filter(([a, b]) => {
      const key = `${a},${b}`;
      const reverseKey = `${b},${a}`;
      if (uniqueSet.has(reverseKey)) return false;
      uniqueSet.add(key);
      return true;
    });
  }

  return pairs;
}

// Teste 01
const arr1 = [10, 11, 12, 13, 14, 15, 16];
console.log(findClosestPairs(arr1, true, true, true));

// Teste 02
const arr2 = [-5, -2, 1, 7, 10, 15];
console.log(findClosestPairs(arr2, true, true, true));

// Teste 03
const arr3 = [5, 3, 8, 5, 1, 3, 9];
console.log(findClosestPairs(arr3, false, true, true));

// Teste 04
const arr4 = [100, 300, 200, 400, 600, 500];
console.log(findClosestPairs(arr4, true, true, true));

// Teste 05
const arr5 = [0, 0.001, 0.002, 0.003, 0.004];
console.log(findClosestPairs(arr5, true, true, true));

// Teste 06
const arr6 = [2, 2, 2, 2];
console.log(findClosestPairs(arr6, false, true, true));
