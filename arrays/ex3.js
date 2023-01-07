const assert = require('node:assert');
/*
Exercicio 3
Dado um array de numeros inteiros como parametro, remova sempre o segundo elemento
e retorne o array resultante
*/
const exec3 = (arr)=>{
    //seu código
    return arr
}
assert.deepEqual(exec3([1,2,3,4]),[1,3,4]);
assert.deepEqual(exec3([1,2,3]),[1,3]);
assert.deepEqual(exec3(['1','2','3']),['1','3']);
assert.deepEqual(exec3([['1','2','3'],true,2]),[true]);
assert.deepEqual(exec3([[],'',3]),[[],3]);
console.log('exercicio 3: ok')