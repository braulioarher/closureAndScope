# closureAndScope

## Scope

Determina la accesibilidad de variables, objetos y funciones desde diferentes partes de codigo

## Declararcion de variables

    -Una variable declarada con var puede ser re-declarada y re-asignada.
    -Una variable declarada con let puede ser re-asignada, pero no re-declarada.
    -Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

## Que es un closure

Un closure es la combinacion entre una funcion y el ambito lexico dond fue declarada
EN JAVASCRIPT necesitamos 3 ingredientes: una función anidada, una referencia a una variable de un scope superior y una invocación a esta función pero desde otro scope distinto al que fue creada.

JavaScript no fomenta el uso de datos privados pero podemos crear datos privados por medio de closure que pueden ser accedidos a travez de metodos

## Debug

Para debugger se recomienda chrome dev tools