    const obj1={a:2,b:23}
    const obj2={a:4,b:46}
    console.log('Objeto 1',obj1)
    console.log('Objeto 2',obj2)
    const obj3={...obj1}
    console.log('Objeto 3',obj3)
    obj1.a=32;
    //modifico la copia 1 y la 3 no se ve afectada, ya que so copias :)
    console.log('++++++')
    console.log('Objeto 1 Mod',obj1)
    console.log('Objeto 2',obj2)
    console.log('Objeto 3',obj3)
    //los atributos del último objeto machacan los valores de la instancia anterior
    const obj4={...obj1, ...obj2}
    console.log ('Objeto 4',obj4)
    const objt5={
        ...obj1,
        loading:true,
        data: {
            data: 'lala',
            data: 'gatito'
        }
    }
    console.log('Objeto 5', objt5)



