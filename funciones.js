//https://estradawebgroup.com/Post/Que-son-las-funciones-anonimas-de-JavaScript-/20587?expand_article=1

/**Funciones que se declaran con la palabra function */

/**Las funciones son clases que se basan en prototipos */
/*Fn function */
    function fn(){
        this.prop='propiedadX'
        //return implícito
    }
    fn.prototype.lala= function (){}

    function FUN(){
        this.propiedad="Propiedad"
        return "Chanchito FUN feliz"    
        }
        const r= new fn()
        console.log(r.__proto__);
         const x=function(){
    return 'tercera función';
    }
       console.log(x);

    function Funcion4(){

    return 'Cuarta f(x)';

    }
    console.log(Funcion4());

    let x2=function(){
    console.log('Función  de x2')
    }

    console.log(x2);
    x2();
    let show = function() {
        console.log('Soy una función anónima');
    };

    show();
    //Funciones anónimas como parámetro:
    setTimeout(function(){console.log('Hola con retardo de 2000 ms')},2000);
    //Ahora hay que llamar a la función con un () al final 
    (function () {
        console.log('Ejecución de función invocada inmediatamente');
    })();

    let showcort = () => console.log('Función anónima showcort');
    showcort();