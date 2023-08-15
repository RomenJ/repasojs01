class Barco{
    //Método constructor que se ejecuta siempre que se instancia 
    //un objeto de la clase
    //Los valores de asignación en los parámetros son los valores por defecto 
  //Variable privada
    #aflote=true
    static estaticoVelocidad=42
        constructor(estado ='Navegando',aflote =true){
            this.estado=estado
            this.#aflote=aflote
          
        }

     navegar(){
        console.log(`El estado del objeto clase barco es... ${this.estado}\n`+
        `El barco se halla ... ${this.#aflote ? 'El barco está a flote' : 'El barco está hundido '}`
        );
    }
    static  avantetoda(){

        console.log ( "A toda máquina¡¡¡. Velocidad en nudos: ",this.estaticoVelocidad)
     }
    }
    
    ObjetoBarco2=new Barco();
    ObjetoBarco2.navegar();
    //Un método estático implica que sólo se puede acceder desde la clase y no es preciso qcrear una instancia
    Barco.avantetoda();
    //Los métodos estáticos no pueden acceder ni públicas ni privadas de una clase. Pero los métodos  y clases sí pueden accerder al método static







