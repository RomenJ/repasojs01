const fn = (a, b ,c )=>console.log(a+b+c)

const fncoma = (a, b ,c )=>console.log(a,b,c)

//hay que asegurar que el array tenga el mismo nº de elementos que los parámetros
array=[1,2,3]
console.log('Valores del array en conjunto \n')
fn(array)
console.log('Posiciones todo junto \n')
console.log('\n')

fn(array[0],array[1],array[2])

console.log('Función Equivalente')
fn(...array)
console.log('Función fncoma')
fncoma(array)
//spread esparce los valores por la function
const arr1=[4,5]
//Función equivalente a concat
const arr2=[...array, ...arr1,10,234]
console.log(arr2)