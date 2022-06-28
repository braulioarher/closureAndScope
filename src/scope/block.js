const fruits = () => {
    if (true) {
        var fruit1 = 'apple';           //var puede se accedido dentro de toda la funcion
        let fruit2 = 'banana';          //let y const solo pueden ser accedidos dentro del bloque 
        const fruit3 = 'kiwi';          //dentro de las llaves

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();


let x = 1;
{
    let x = 2;
    console.log(x);             //imprime el valor de x dentro del bloque
}
console.log(x);                 //imprime el valor de x del scope local

var y = 1;
{
    var y = 2;
    console.log(y);             //se imprime la ultima asignacion de y usando var
}
console.log(y);                 //imprime el ultimo valor asignado a y que en este caso fue 2

const anotherFunction = () => {
    for(var i = 0; i<10; i++) {         //si asignamos un for y un setimeout con var este toma el ultimo
        setTimeout (() => {             //valor del la itearcion se recomienda en este casa trabajar con let
            console.log(i);
        }, 1000)
    }
}
anotherFunction();

for (var i = 0; i < 10; i++) {
    console.log(i);
}

function functionName() {
	var i;
	for(i = 0; i < 3; i++) {
		setTimeout(function() {
			console.log(i);
		}, 1000);
	}
	// Este console.log podra acceder a i aun afuera del for, esto por que la variable i fue declarada y asignada antes que todo en tiempo de ejecución (hoisting).
	console.log('El valor final de "i" es: ' + i);
}
functionName();

//Block Scope

function fruits () {
    if (true) {
        var fruit1 = 'Apple';       //Pertenece al function scope
        let fruit2 = 'Kiwi';        //Pertenece al block scope
        const fruit3 = 'Banana';    //Pertenece al block scope
    }
    console.log(fruit1);        //ejecuta esto pues fruit1 pasa al scope de la funcion
    console.log(fruit2);        //no ejecuta de aqui en adelante pues fruit2 no esta declarada en el function scope
    console.log(fruit3);
}

fruits()
console.log(fruit1)