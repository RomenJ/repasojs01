const arr=[0,1,2,3,4]
//filter:tomas ls valores y devuelve los evaluados a true
const r= arr.filter(el=>el>2)
console.log(r)
//índices
const r2= arr.filter((el,i)=>{
    console.log(i)
    return el<3
}
)