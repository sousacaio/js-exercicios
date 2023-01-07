const assert = require('node:assert');
/*
Exercicio 4:
Coloque os items do array em ordem crescente, para isso:
- caso uma string contenha um número, identifique o número e o acrescente ao array
- ignore números repetidos
- ignore strings vazias
- ignore booleanos


*/
const exec4 = (arr)=>{
    //seu código
    return arr
}

assert.deepEqual(exec4([1,3,2]),[1,2,3]);
assert.deepEqual(exec4([1,'3',2]),[1,2,3]);
assert.deepEqual(exec4([2,'',1]),[1,2]);
assert.deepEqual(exec4([2,'',1]),[1,2]);
assert.deepEqual(exec4([2,true,1]),[1,2]);
console.log('exercicio 4: ok')