
// Entrega 1 - JavaScript




// Función 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const function1 = () => {
    let number = prompt("Función 1: Escribir el número para saber si es par o impar");

    console.log("Función 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar");

    if(number % 2 === 1) {
        console.log(`El número ${number} es impar`);
    } else if (number % 2 === 0) {
        console.log(`El número ${number} es par`);
    } else {
        console.log("No has colocado ningún número");
    }
}

function1();



// Función 2 - Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const function2 = () => {
    let num1 = prompt("Función 2: Escribir el número 1 para saber cuál es mayor");
    let num2 = prompt("Función 2: Escribir el número 2 para saber cuál es mayor");

    console.log("Función 2 - Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales");

    if (num1 < num2) {
        console.log(`El número ${num2} es mayor que el número ${num1}`);
    } else if (num1 > num2) {
        console.log(`El número ${num1} es mayor que el número ${num2}`);
    } else {
        console.log(`Los números ${num1} y ${num2} son iguales`);
    }
}

function2();



// Función 3 - Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const function3 = () => {
    let number = prompt("Función 3: Escribir el número para saber si es múltiplo de 5");

    console.log("Función 3 - Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5");

    if (number % 5 === 0 && number != 0) {
        console.log(`El número ${number} es múltiplo de 5`);
    } else {
        console.log(`El número ${number} NO es múltiplo de 5`);
    }
}

function3();



// Función 4 - Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const function4 = () => {
    let number = prompt("Función 4: Escribir el número para recibir todos los números del 0 hasta el elegido");

    console.log("Función 4 - Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número");

    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}

function4();



// Función 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const function5 = () => {
    let word = prompt("Función 5: Escribir la palabra que se repetirá las veces indicada")
    let number = prompt("Función 5: Escribir el número de veces que se repetirá la palabra");

    console.log("Función 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado");

    for (let i = 1; i <= number; i++) {
        console.log(`${word}`);
    }
}

function5();



// Función 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let arrayNames = ["Juan", "Pedro", "Nicolás", "Rodrigo"];

const function6 = (array) => {
    alert('Función 6: El array elegido es: ["Juan", "Pedro", "Nicolás", "Rodrigo"]');

    console.log("Función 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array")

    for(value of array) {
        console.log(value);
    }
}

function6(arrayNames);



// Función 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.

let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const function7 = (array) => {
    alert('Función 7: El array elegido es: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]');

    console.log("Función 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo");

    for (let i = 1; i <= array.length; i++) {
        if (i == 5) {
            continue;
        }
        console.log(i);
    }
}

function7(arrayNumbers);



// Función 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const function8 = (array) => {
    alert('Función 7: El array elegido es: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]');

    console.log("Función 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.")

    let number = prompt("Función 8: Escribe un número para multiplicar los valores del array");

    for (value of array) {
        console.log(number * value);
    }
}

function8(arrayNumbers);