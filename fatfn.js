 //fat arrow function

        //las fat arrow function no pueden ser instanciadas con new
        //Sólo las funciones tipo function puede ser declaradas con new
        //Esto es así porque las function tiene el estatus de clase
        //Y tampoco se puede usar el operador this en la fatarrowFun
        const fatFn=()=>{

            return "Chanchita super feliz"
        }
        console.log (fatFn())


        function fn(){
            this.prop='propiedadX'

            }
            
            console.log (this);

            //Las Arror funtion tinen return implícito (quitando las llaves)
            const fatFn2=()=>2
            //imprime 2 
            console.log('La salida de factFn2 es '+fatFn2());

            const fatFn3=()=>3


            console.log('La salida de factFn3 es'+fatFn3());
            