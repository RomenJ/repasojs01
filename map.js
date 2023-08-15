//map devuelve un array de misma longitud y sobre los que se aplica una función

const arr=[1,2,3,4]
//const mapeado=arr.map((el)=> el*3+'s')
const mapeado=arr.map((el)=>`<h1> ${el}</h1>`)
//console.log('Array simple',arr)
//console.log('Mapeado', mapeado)
const users=[
    {id:1, name: 'Pepe Penas'},
    {id:2, name: 'Pepa Pans'},
    {id:3, name: 'Pedre Ponss'},
    {id:4, name: 'Ppepepepe Porkes'},
    {id:5, name: 'Pepeee EEE'},
]
const mapeado2=users.map((user)=>`<h1> ${user.name}</h1>`)
console.log('Mapeado 2 ', mapeado2)
