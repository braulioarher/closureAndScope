/*

function myMoneyBox (coins) {
    let savedCoins;
    savedCoins += coins;
    console.log(`Tienes ahorrado: $${savedCoins}`);
}

moneyBox(5);
moneyBox(5);  //debido a que savedCoins simepre se nicializa en cero dentro de la funcion la funcion siempre regresara el valor que le pasemos como argumento sin que haga la suma a valores pasados

*/

const moneyBox = () => {
    let savedCoins = 0;
    function countCoins(coins) {
        savedCoins += coins;
        console.log(`MoneyBox: $${savedCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();     //Se reusa la funcion sin intervenir con la pasada
moneyBoxAna(10);    //con closures podemos reciclar logica
moneyBoxAna(20);
moneyBoxAna(5);             