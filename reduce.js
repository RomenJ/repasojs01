//reduce devuelve un array con lo que deseado (sumar, hacer un string, correr promesas, eliminar duplicados...)


const arr=[1,2,3,4]
//los parámetros que recibe fa duncion reduce  dos parámetros: acumulador y elemento
const getMax=(a,b)=>Math.max(a,b)
//const r1=arr.reduce((acc, el) =>acc+el,0)
const r1=arr.reduce(getMax)

console.log(r1)

//console.log (getMax(12,3435))


const users=[
    {id:1, name: 'Pepe Penas'},
    {id:2, name: 'Pepa Pans'},
    {id:3, name: 'Pedre Ponss'},
    {id:4, name: 'Ppepepepe Porkes'},
    {id:5, name: 'Pepeee EEE'},
]

const reduce2=users.reduce((acc, el)=>` ${acc==='' ? '' : `${acc}, `}${el.name}`, '')
console.log('Reduce2: \n ', reduce2)

const rx=users.reduce((acc,el)=>{
if(el.id<2){

    return acc
}

return acc.concat(el)

},[])

console.log(rx);