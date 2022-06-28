const anotherFunction = () => {
    for(let i = 0; i<10; i++) {         //si asignamos un for y un setimeout con var este toma el ultimo
        setTimeout (() => {             //valor del la itearcion se recomienda en este casa trabajar con let
            console.log(i);
        }, 1000)
    }
}
anotherFunction();
