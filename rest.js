//Rest Operator, va en el lugar final
//da error poner el ...rest al final

const rest=(a,...argumentos)=>{
    console.log('Imprime el a');
    console.log(a);
    console.log('Imprime el resto');
    console.log(argumentos);

}

rest (1,2,3)

const obj={

    a:1,b:10,c:30,d:2340
}
//Extrayendo la propiedad a del obj
const{a}=obj;
const{b}=obj;
console.log('Propiedad a del objt',a);
console.log('Propiedad d del objt',b);
console.log('Propiedad hasta el final del objt',obj);
const arrX=[1,2,3,4,5,6,7]
const[x1,x2, ...r]=arrX
console.log (x1,x2,r);
const useState= ()=> ['valor, ()=>{}']
const [valor, setValor]=useState()
console.log (valor, setValor)