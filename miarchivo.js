//ESTRUCTURA SWITCH
/* 
let hola = prompt("Ingrese un número");

while (hola != "100") {
  switch (hola) {
    case "105":
      alert("Felicitaciones");
      break;
    case "190":
      alert("Nos vimos");
      break;
    default:
      alert("Lo lamento");
      break;
  }
  hola = prompt("Ingrese un número");
} */

//CALCULAR EDAD PROMEDIO DE PERSONAS REGISTRADAS

/* let edades = [22, 31, 33, 18, 50, 65];

let suma = edades.reduce((a, n) => ((a += n), a), 0);
console.log(suma);

let promedio = suma / edades.length;
console.log(promedio); */

/* let parcial, ultima, promedio;

parcial = parseFloat(prompt("Ingrese nota parcial"));

ultima = parseFloat(prompt("Ingrese su ultima nota"));

promedio = (parcial + ultima) / 2;

if (promedio >= 7) {
  alert("El promedio es: " + promedio + " APROBADO");
} else if (promedio <= 6 && promedio >= 4) {
  alert("El promedio es: " + promedio + " RECUPERATORIO");
} else {
  alert("El promedio es: " + promedio + " DESAPROBADO");
} */

//FUNCION EJERCICIO 1

/* function entrada() {
  return prompt("INGRESAR DATO");
}

function procesamiento(valor) {
  return "LA ENTRADA ES " + valor;
}

function salida(valor) {
  alert(valor);
}

salida(procesamiento(entrada())); */

//FUNCION EJERCICIO 2 - SE PUEDE USAR PARA NOTAS ALUMNOS

/* function redondeo(valor) {
  return Math.round(valor);
}
for (let index = 0; index < 5; index++) {
  let entrada = prompt("Ingrese una nota");
  alert(redondeo(entrada));
} */

//FUNCION EJERCICIO 3 - CALCULA PORCENTAJE DE UN IMPUESTO

/* function impuesto(precio, porcentaje) {
  return precio + (precio * porcentaje) / 100;
}
for (let index = 0; index < 5; index++) {
  let resultado = impuesto(
    parseFloat(prompt("INGRESAR PRECIO")),
    parseFloat(prompt("INGRESAR %"))
  );
  alert(resultado);
} */

//FUNCIONE EJERCICIO 4 - COTIZAR PESO A DOLAR Y VICEVERSA

/* const dolarBlue = 300;

const cotizarDolar = (pesos) => pesos / dolarBlue;
const cotizarPesos = (dolar) => dolar * dolarBlue;

let seleccion = prompt(
  "Seleccione cotización \n 1 - Dólares a pesos \n 2 - Pesos a dólares"
);
let valor = prompt("Monto");
switch (seleccion) {
  case "1":
    alert(cotizarPesos(valor));
    break;
  case "2":
    alert(cotizarDolar(valor));
    break;
  default:
    break;
} */

//FUNCION VALIDACION

/* function validacion(cadena) {
  return cadena != "";
}
let entrada = prompt("INGRESAR CADENA");
while (entrada != "ESC") {
  alert(validacion(entrada));
  entrada = prompt("INGRESAR CADENA");
} */

//CALCULAR NOTA FINAL DE ALUMNOS INGRESADOS

/* let apellidos = prompt("Ingrese su apellido");
const entrada = ["Gomez", "Moreno", "Ramirez"];
entrada.push(apellidos);
for (let i = 0; i < 3; i++) {
  alert("POSICION " + i + " JUGADOR " + equipo[i]);
} */

/* 

for (let i = 0; i < alumnos.lenth; i++) {
  console.log("Los alumnos que ingresaste son: " + alumnos[i]);
}

function calcularNota() {
  let alumnos;
  do {
    alumnos = prompt("Ingrese su apellido");
  } while (!alumnos);

  console.log(alumnos);

  return alumnos;
}

function notaMat() {
  let notaMate = parseInt(prompt("Ingrese su nota de Matemática"));

  return notaMate;
}

function notaLeng() {
  let notaLen = parseInt(prompt("Ingrese su nota de Lengua"));

  return notaLen;
}

function notaSoc() {
  let notaSoc = parseInt(prompt("Ingrese su nota de Ciencias Sociales"));

  return notaSoc;
}

function notaNat() {
  let notaNat = parseInt(prompt("Ingrese su nota de Ciencias Naturales"));

  return notaNat;
}

function promedio() {
  let notaMatematica = matematica;
  let notaLengua = lengua;
  let notaSociales = sociales;
  let notaNaturales = naturales;
  let calculo =
    (notaMatematica + notaLengua + notaSociales + notaNaturales) / 4;
  console.log("El promedio de " + alumnos + " es " + calculo);

  if (calculo >= 7) {
    alert("El promedio es: " + calculo + " APROBADO");
  } else if (calculo <= 6 && calculo >= 4) {
    alert("El promedio es: " + calculo + " RECUPERATORIO");
  } else {
    alert("El promedio es: " + calculo + " DESAPROBADO");
  }
}

let alumnos = calcularNota();
let matematica = notaMat();
let lengua = notaLeng();
let sociales = notaSoc();
let naturales = notaNat();
let notaFinal = promedio(matematica, lengua, sociales, naturales); */

let nombreAlumnos = prompt("Ingrese el nombre del alumno o ESC para salir");
const alumnos = [];
while (nombreAlumnos != "ESC") {
  alumnos.push(nombreAlumnos);
  nombreAlumnos = prompt("Ingrese el nombre del alumno o ESC para salir");
}
