//El ámbito léxico se refiere a las funciones que se ejecutan utilizando la cadena del scope donde estaban vigente en su momento

const buildCount = (i) => {                     //se crea una funcion que recibe un parametro
    let count = i;                              //se le asigna el parametro a la variable cout
    const displayCount = () => {                //se crea una funcion que imprime i suma la variable count
        console.log(count++);
    };
    return displayCount;                        //regresa la funcion dentro de la funcion para crear el closure
};

const myCount = buildCount(1);                  //creamos una nueva referencia a la funcion que closure
myCount(); //1 
myCount(); //2
myCount(); //3

const otherCount = buildCount(10);            //creanos una nueva intancia al closure
otherCount(); //11
otherCount(); //12
otherCount(); //13              //Como se observa regresa diferentes valores dependiendo de la instancia a la que haga referencia

const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent () {    //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child (){
            console.log(inner, myNumber, myGlobal); //puede acceder a las funciones pasadas y al global
        }
        return child();
    }
    return parent();
}
 myFunction()