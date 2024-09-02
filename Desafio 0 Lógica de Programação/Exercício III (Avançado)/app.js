/* 
Exercício III (Avançado)
Escreva uma função que retorne todos os subconjuntos de um conjunto de números. A função deve permitir os seguintes parâmetros opcionais:

- max_size (inteiro): Limita o tamanho máximo dos subconjuntos.
- min_size (inteiro): Define o tamanho mínimo dos subconjuntos.
- distinct_only (booleano): Se definido como True, a função deve garantir que os subconjuntos não contenham elementos duplicados.
- sort_subsets (booleano): Se definido como True, os subconjuntos e os elementos dentro dos subconjuntos devem ser retornados em ordem crescente.
 
*/

function generateSubsets(
  nums,
  max_size = Infinity,
  min_size = 0,
  distinct_only = false,
  sort_subsets = false
) {
  let subsets = [];

  function backtrack(start, currentSubset) {
    if (currentSubset.length >= min_size && currentSubset.length <= max_size) {
      subsets.push([...currentSubset]);
    }

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]);
      backtrack(i + 1, currentSubset);
      currentSubset.pop();
    }
  }

  if (distinct_only) {
    nums = [...new Set(nums)];
  }

  backtrack(0, []);

  if (sort_subsets) {
    subsets = subsets.map((subset) => subset.sort((a, b) => a - b));
    subsets.sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
  }

  return subsets;
}

// Testes 01
const nums = [1, 2, 2, 3];
console.log(generateSubsets(nums, 3, 1, true, true));

// Testes 02
const nums1 = [1, 2, 3];
console.log(generateSubsets(nums1));

// Teste 03
const nums2 = [1, 2, 2, 3];
console.log(generateSubsets(nums2, Infinity, 0, true));

// Teste 04
const nums3 = [1, 2, 3, 4];
console.log(generateSubsets(nums3, 2, 2));

// Teste 05
const nums4 = [3, 1, 2];
console.log(generateSubsets(nums4, Infinity, 0, false, true));

// Teste 06
const nums5 = [2, 2, 3, 4];
console.log(generateSubsets(nums5, 3, 1, true, true));
