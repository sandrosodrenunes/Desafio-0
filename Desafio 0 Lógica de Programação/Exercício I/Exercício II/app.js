/*
Dado um array de números inteiros, 
escreva uma função que retorne o par de números com a menor diferença absoluta.
Se houver mais de um par com a mesma diferença, retorne todos eles em uma lista.  
 */

function findPairsWithSmallestDifference(arr) {
  if (arr.length < 2) return [];

  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];

    if (diff < minDiff) {
      minDiff = diff;
      result = [[arr[i], arr[i + 1]]];
    } else if (diff === minDiff) {
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
}

const arr = [4, 2, 1, 3];
console.log(findPairsWithSmallestDifference(arr));
