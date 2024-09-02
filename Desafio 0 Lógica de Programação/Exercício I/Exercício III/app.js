/* 
Escreva uma função que retorne todos os subconjuntos de um conjunto de números. 
Por exemplo, se a entrada for [1, 2], a saída deve ser [[], [1], [2], [1, 2]].
*/

function generateSubsets(nums) {
  let subsets = [[]];

  for (let num of nums) {
    let newSubsets = [];
    for (let subset of subsets) {
      newSubsets.push([...subset, num]);
    }
    subsets = [...subsets, ...newSubsets];
  }

  return subsets;
}

const nums = [1, 2];
console.log(generateSubsets(nums));
