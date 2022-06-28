var a; //declaracion
var b = 'b' //declaracion / asignacion
b = 'bb' //reasignacion

var hello = "Hello"; //variable asignada de forma global se puede acceder en cualquier lugar a ella
let world = "World"; //Con let no se puede re-asignar un valor usando nuvemente la palabra let
const helloWorld = "Hello World";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// Global Scope

var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries () {
    country = "Mexico";     //se asigna una variable que no ha sido declarada en automatico pasa al global scope a pesan de que haya sido declarada dentro de una funcion
    console.log(country);
}

countries();
console.log(country);