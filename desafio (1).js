/* Desafío: javaScript

Nombre de Desafío: ec6_js

Instrucciones */


// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  const matriz = Object.entries(objeto);
  console.log(matriz);
//   for (i=0; i<matriz.length; i++)
// console.log(matriz[i]);

}

const miobjeto = {
  D : 1,
  B : 2,
  C : 3,
}

deObjetoAmatriz(miobjeto)

 const persona = {
    nombre: "Rafa",
    hermana: "Renata"
   }

   deObjetoAmatriz(persona)





function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  // aaabbdddddffffffhjjjj
  //Escribe tu código aquí

 let palabra = string.split("").sort()
 let contador = 0;
 let resultado = {} //objeto vacio

 for(i=0;i<palabra.length;i++){
     let letra = palabra[i];
     //console.log(letra)
     contador++ ;
     if(letra != palabra[i+1]){      
      //console.log( letra + ":" + contador)
      resultado[letra] = contador
      contador=0;
     }
 }

 return resultado
}

 console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"))



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  let mayusculas = ""
  let minusculas = ""
  for (let i = 0; i < s.length; i++) {
     if ( s[i] == s[i].toUpperCase())
     {
      mayusculas += s[i];
     } 
    else {
      minusculas += s[i];
    }
    
  }
  console.log(mayusculas)
  console.log(minusculas)
 return mayusculas + minusculas
}
console.log(capToFront("soyHENRY"))


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let entrada = str.split(" ")
  let espejo = ""
  for (let i = 0; i < entrada.length; i++) {
    let frase = entrada[i].split("").reverse().join("");
    espejo += frase + " "

  }

 return espejo

} 


console.log(asAmirror("The Henry Challenge is close!"))



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí  

  let num = numero.toString().split("").reverse("").join("")
  console.log(num)
  if(numero == num){
      return "Es capicua"
  }
  else {
    return "No es capitua"
  }
   
}

console.log(capicua(1221))
console.log(capicua(1234))

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let palabra = cadena.toString().split("")

  for (let i = 0; i < palabra.length; i++) {
  
    if (palabra[i] == "a" || palabra[i] == "b" || palabra[i] == "c") {
      palabra[i] = ""

        
    }      
    

  }
return palabra.join("")

}

console.log(deleteAbc("arbol con tomates"))


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 
  arr.sort()

  arr.sort( function ord (a , b){
    return b.length - a.length
  } )

  return arr
  // for (let i = 0; i< arr.length; i++) {
  //   let primero =  arr[i].length
  //   let segundo = arr[].length 
  //   if( primero >  segundo ){

  //   }
    
  //   console.log(arr[i].length)
  // }
}

console.log(sortArray(["Youdasda", "are", "beautiful", "looking"]))

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}