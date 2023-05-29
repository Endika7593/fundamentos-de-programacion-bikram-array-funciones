//1
const arrayVacio = []


//2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//3
const arrayNumerosPares = [0, 2, 4, 6, 8]

//4
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//5
function suma(n1, n2) {

    let total = n1+ n2
    
    return total
}

//6

function potenciacion (n1, n2) {
    let total = n1**n2
    
    return total
}
//7

function separarPalabras(string) {
   return string.split(' ')
    
}

//8
function repetirString(string, num) {
    return string.repeat(num)
}

//9
function esPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  //10

  function ordenarArray(num) {
    return num.slice().sort(function(a, b) {
      return a - b;
    });
  }
  
  //11

  function obtenerPares(num) {
    let pares = [];
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 === 0) {
        pares.push(num[i]);
      }
    }
    return pares;
  }

  function obtenerPares(arr) {
    var pares = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        pares.push(arr[i]);
      }
    }
  
    return pares;
  }
  
  //12

  function pintarArray(array) {
    return '[' + array.join(', ') + ']';
  }
  
  //13

  function arrayMapi(array, func) {
    var arrayNuevo = [];
  
    for (var i = 0; i < array.length; i++) {
      arrayNuevo.push(func(array[i], i, array));
    }
  
    return arrayNuevo;
  }
  
  //14
  function eliminarDuplicados(array) {
  return [...new Set(array)];
}

    //15

    let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

    //16
    const holaMundo = ["Hola", "Mundo"];


    //17
    const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

    //18

    const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

    //19

    function multiplicacion(num1, num2) {
        return num1 * num2;
      }

    //20

      function division(num1, num2) {
        return num1 / num2;
      }

      //21
      function esPar(numero) {
        return numero % 2 === 0;
      }
    //22
    const arrayFunciones = [
        function suma(num1, num2) {
          return num1 + num2;
        },
        function resta(num1, num2) {
          return num1 - num2;
        },
        function multiplicacion(num1, num2) {
          return num1 * num2;
        }
      ];
      

    //23
    function ordenarArray2(array) {
        return array.sort((a, b) => b - a)    
      }
    //24

    function obtenerImpares(array) {
        return array.filter((num) => num % 2 !== 0);
      }
      
    //25
    function sumarArray(array) {
        return array.reduce((total, num) => total + num, 0);
      }

    //26
    function multiplicarArray(array) {
        return array.reduce((total, num) => total * num, 1);
      }
    //final terminado
      



      