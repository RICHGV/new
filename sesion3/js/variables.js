/*variables*/
/*tipos de datos:
numeros enteros (10)
numeros decimales(10.87)
palabras,texto,strings("diez y veinte",'diez y veinte')
boleanos, booleans, logicos(verdadero, falso, true, false, 1,0,)
arrays, areglos, vectores, matrices (enteros=[1,2,3,4,5,6,7,8])
*/

console.log("santy");

/*solución daniel*/
var producto = 1112;
var nuev =(producto *.16) + producto;
console.log (nuev);

/*crear una variable que contenga su nombre de pila
y escribirlo en consola*/

var nombre ="bruni";
console.log(nombre)

/*crear una variable que contenga su apellido paterno
y escribirlo en la consola*/
var paterno = "godinez";
console.log(paterno);

/*escribir en la consola el nombre y apellido*/
console.log("glexvelex")

/*escribir en consola el nombre y apellido usando las variables anteriores de nombre y apellido*/




/*crear una variable llamada edad*/


var edad ="12";
console.log("edad:"+edad);

/*obtener un valor verdadero*/
var verdadero1 = 1 ==1;
console.log(verdadero1);
var verdadero2 = 1


var v3 = "1"<"11";
console.log(v3);

var v3="a" < "b"; /*96<97*/
console.log(v3)

/*operadores de comparacion javascript,php, c, phiton, java
==para comparar si dos objetos son iguales
<para comparar si el primer objeto es menor que el segundo
>para comparar si el primer objeto es mayor al segundo
!=para comparar si dos objetos son diferentes
<=para comparar si el primer objeto es menor o igual al segundo
>=para comparar si el primer objeto es mayor o igualal segundo

*/

/*escribe un codigo que en base a un porcentaje indique 
si el vaso esta medio lleno o medio vacio*/

var porcentaje =49;/*escala de 0 a 100%*/

if(porcentaje<50){
console.log("el vaso esta medio vacio")

}else {
	console.log("el vaso esta medio lleno!")
}

/*escribe un codigo que en base a un porcentaje de 0
a 100% indique si estas medio llenito o flaquito*/
var porcentaje =74;/*escala de 0 a 100%*/

if(porcentaje<50){
console.log("si esta medio llenito")

}else {
	console.log("si esta medio flaquito!")
}

var por =74;

if(por<50){
console.log("si esta medio llenito");

}else if{(por>45){
console.log("si esta medio flaquito!")
}
	console.log("si esta medio flaquito!")
}


/*crear un areglo con 5 enteros*/
var a= 1;
var b= 2;
var c= 3;
var enteros2= [a,b,c,4,5]; /*0,1,2,3,4*/
console.log(enteros);
console.log(enteros2);
console.log(enteros2[2]);

var nom=['kary','perlis','pat','ale','thani','aura','pam','brauriel','rich','zuabe']
console.log(nom);

for(i=0;i<=10;i+=1){/*i+=1->i=i+1 | incremento en 1*/
console.log(i+""+nom[i]);
}

/*imprimir la lista de nombre , donde cada nombre este encerrado entre corchetes*/


for(i=0;i<=10;i+=1){/*i+=1->i=i+1 | incremento en 1*/
console.log("["+nom[i]+"]");
}
/*impreimr la lista de nombres, donde cada nombre este marcado por etiquetas <li> y </li> */

for(i=0;i<=10;i+=1){/*i+=1->i=i+1 | incremento en 1*/
console.log("<li>"+nom[i]+"<li>");
