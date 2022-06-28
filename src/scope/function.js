//la palabra reservada var permite que una variable sea nuevamente declarada y esto puede dar problemas contrario a lo que suscede con let y const por lo que se recomienda usar las anteriores

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 3;
   // let y = 5;  //Aqui existe un error de sintaxis pues no podemos re declarar una variable
}

//Function Scope

function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); //esta variable no puede ser llamada pues no esta declarada en el globla scope mas bien solo recide esta variable dentro de la funcion