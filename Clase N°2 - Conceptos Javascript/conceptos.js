// Variables y Tipos de Datos 

// Variable :  Espacio reservado en memoria para almacenar un dato
// Tipo de Dato : Es el atributo que se especifica 
// Tipo Primitivos: Strings - Booleanos - Number - Null - Undefined
// Tipo Objeto: Objetcs y Arrays

// EcmaScript 6 o 2015 : Let y const y el concepto de clases y los template Strings

// Template String : ${``}

//-------------------------------
// Variables ( let y const)

// Un bloque en javascript se entiende como todo lo que queda dentro
// de dos llaves y contiene fucniones,bucles..etc.


// Variable: Let

// Ejemplo 

let i = 0;  // Declaro una variable "i" con valor 0 ambito global

function foo(){
    i = 1;   // Modifico valor de i en ambito local
    let j = 2; // Variable "J" que pertenece en ambito local
    if(true){    // 
        console.log(i);
        console.log(j);
    }
}

foo();   // Invoco a la fncion "foo"
console.log(j);   // Error: no se puede mostrar fuera del ambito local


// Ejemplo 2 

function foo(){
    let i = 0;
    if (true) {
        let i = 1;
        console.log(i);
        
    }
    console.log(i);
}

foo();
let myVariable;

//-------------------------------------

// Variable : Const 

// se prohibe la reasignacion de valores por ser valores constantes
// Si se intenta reasigna una variable sera un TypeError
// Si el valor de un const es algo "Mutable" como un array o objeto
// se pueden cambiar los valores internos de los elementos

// Ejemplo 3 :  TypeError

const userName = "Jose";
userName = "Leandro";   // TypeError : no es posible

// Ejemplo 4 : Mutabilidad

const user = {name: "antonio", edad: 12, color: "rojo"}  // Declaro un objeto 
user.name = "Marcos" 
user.edad = user.edad + 1

//Muestro por consola
console.log(user.name);
console.log(user);

//----------------------------------

// Funciones 

// Ejemplo 5 : Estructura 

/*
function nombre ([param[param[, ....param]]]){
    // instrucciones
}
*/

// Nombre: es el nombre de la funcion, se puede omitir
//         en ese caso seria una funcion anonima
// Parametros:  es el nombre de un argumento que pasara a la funcion
// instrucciones: son las que forman el cuerpo de la funcion

// Funciones anonimas:  Funcion sin nombre 

// La funcion se almacena en memoria, pero el tiempo de ejecucion
// no crea automaticamente una referencia de si misma

// Devolviendo una funcion anonima desde otra funcion

function foo () {
    return function () {
        console.log("Hola Coder");
    }
}

const f = foo(); // Asignando Funcion Anonima a una variable
f();


// Funciones IIFE (funciones que se ejecutan tan pronto como se definen)
// Se componen por dos partes: 
     // - Funcion anonima con alcance lexico encerrada por el operador de asignacion()
     // - Expresion de la funcion cuya ejecucion es ()
(
    // Definicion de la funcion
    function (){
        // instrucciones
        console.log("Hola");
    }
)();   // invocacion de la funcion 

//-------------------------------

//Scope : Indica el ambito o alcance actual de ejecucion

// en el los valores y las expresiones son visibles o referenciados
// una funcion puede ser un scope
// los scopes se pueden superponer en una jerarquia:

// Ambito Global --> Funcion ---> if / for

// Dentro de la funcion accedo a todo el ambito global 
// Dentro del if o for accedo 


















