a = 2;
var a;
console.log(a); //2    el resultado es dos el hoisting eleva las declaraciones o sea primero se declara luego se asigna

console.log(a); //undefined
var a = 2;

nameOfDog('Elmo');          //A pesar de que llamamos la funcion antes de declararla el hoisting eleva la funcion para que esta pueda ser llamada

function nameOfDog(name) {
    console.log(name)
}

