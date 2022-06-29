// Ejercicio 1

function mostrarLista(a,b,c,d){
    if (a,b,c,d){ 
    console.log(`${a} ${b} ${c} ${d}`);
    } else {
        console.log("lista vacía");
}
}

mostrarLista("papas","bananas","peras","tomates");
mostrarLista();

// Ejercicio 2

// Ejercicio 3 

// Ejercicio 4 : Clases

class Contador {
    constructor(nombre){
        this.nombre = nombre;   // instancia
        this.cuenta = 0;  
    }

    static cuentaTotal = 0;
    
    aumentarCuenta(){
        this.cuenta++;
        Contador.cuentaTotal+=1;

    }

}

const cPedro = new Contador("Pedro");
const cJuan = new Contador("Miguel");