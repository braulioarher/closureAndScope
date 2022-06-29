//Un closure permite acceder al ambito de una funcion exterior desde una funcion interior
//En JavaScript los closures se crean cada vez que una funcion es creada

const moneyBox = () => {
    var savedCoins = 0;                //esta variable solo existira dentro de este scope
    const countCoins = (coins) => {
        savedCoins += coins;
        console.log(`You have saved: $${savedCoins}`);
    }
    return countCoins;               //al momento de retornar la funcion se crea un closure
}

let myMoneyBox = moneyBox();                    //al momento de hacer esta asignacion podemos pasar el argumento que espera la funcion dentro de la funcion y de esta forma 

myMoneyBox(4);
myMoneyBox(10);

