const person = () => {
    var saveName = "Name";                      //no se puede cambiar este valor de ningun lado este es un dato privado
    return {                                    //se crea metodos dependiendo del metodo a usar se debe de pasar o no argumento 
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Braulio');
console.log(newPerson.getName());