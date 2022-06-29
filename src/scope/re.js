var firstName; //Undefined
firstName = 'Braulio';  //Asignamos
console.log(firstName);

var lastName = 'Arcos'; //Declarar / asignar
lastName = 'Vurtual';  //Reasignar

//Let 

let fruit = 'Apple';    //Declarar / asignar
fruit = 'Kiwi';         //reasignar

let fruit = 'Banana'; //No se puede redeclarar con let

//Const

const animal = 'dog';   //declaracion / asignacion
animal = 'cat';         //no se puede reasignar con cosnt
const animal = 'snake'  //tampoco se puede redeclar

const vehicles = [];
vehicles.push('Corolla');   //se agrega 
console.log(vehicles);

console.pop();
console.log(vehicles);      //se elimina el ultimo elemento del array