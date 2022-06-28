const helloWorld = () => {
    const hello = 'Hello World';            //scope local
    console.log(hello);
};

helloWorld();
console.log(hello);
//En el siguiente ejemplo se muestra el ambito lexico donde la variable scope toma el valor dentro de la funcion donde esta vuelve a ser declarada y no en la del entorno globa
var scope = "I am global";

const functionScope = () => {
    var scope = "I am just a local";
    const fun = () => {
        return scope
    }
    console.log(fun());
}

functionScope();

//