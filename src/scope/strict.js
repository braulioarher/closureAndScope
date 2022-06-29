//Modo estricto permite ejectutar de forma estricta reglas para cumplir de mejor manena con los estandares

'use strict';    //Al hacer esto JavaScript permite que se elimine el hoiting obligandote a declarar las variables forzosamente
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';                 //Aplica tambien para funciones
    return pi = 3.1416;
}

console.log(myFunction());