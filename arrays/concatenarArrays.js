// concatenando array

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], 'ray'); // podemos concatenar  com outros arrays
// console.log(a3);

// ...rest -> spread espalhar o array funciona também para objeto

const A3 = [...a1, ...a2, 'Ray', ...[7,8,9]];
console.log(A3);