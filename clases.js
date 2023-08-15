//Repaso de JS del curso de React de Udemy: React - Guía definitiva: hooks router redux next +Proyectos
//Ejemplos de la sesión

//expresión de clase tipo STANDART:
/*
const Rectangulo=class R{
}*/

//Declaración de clase con class (No hoisting): 

class Rectangulo2{

}

//Una de las diferencias estriba en que 
//los objetos de la clase function
//puede ser refernciados antes de ser declarados
//ya que la declaración de estos objetos se lee al principio
//esto se llama Hoisting
//Esto quiere decir que que var y function se leen al ppo.
//Véase llamado a la función:
Cuadrado();
//

function Cuadrado(){
    console.log('SOy un cuadrado')
}

console.log (Rectangulo2,Cuadrado);

//expresión de clase tipo anónima en una constante:

const Rectangulo=class{


}


const r=new Rectangulo();
//Ejemplos adicionales freestyle

class NaveEspacial{
//Método constructor que se ejecuta siempre que se instancia 
//un objeto de la clase
//Los valores de asignación en los parámetros son los valores por defecto 
  
    constructor(saga='Arcadia', autor='Leiji Matsumoto', y='1976', estado='En misión'){

        console.log('Iniciado objeto de la clase Nave Espacial. Saga: '+saga+', Autor:'+autor+', Año: ' +y+',Estado: '+estado);
    }
}

const arcadia= new NaveEspacial();
const xwing= new NaveEspacial('Xwing','Gorge Lucas','1977');
xwing;
//objeto con parámetros por defecto: 
arcadia;
class Nave{
    //Método constructor que se ejecuta siempre que se instancia 
    //un objeto de la clase
    //Los valores de asignación en los parámetros son los valores por defecto 
       nombre='La Perla Negra'
        constructor(){
    
            console.log(`Iniciado objeto de la clase Nave ${this.nombre}` );
        }
    }
    
    n1=new Nave();
    n1;

    class Barco{
        //Método constructor que se ejecuta siempre que se instancia 
        //un objeto de la clase
        //Los valores de asignación en los parámetros son los valores por defecto 
      
        constructor(estado ='Navegando'){
                this.estado=estado  
            }
         navegar(){
            console.log(`El estado del objeto clase barco es... ${this.estado}` );
        }
        }
        
        n2=new Barco();
        n2.navegar();
    
    
    
