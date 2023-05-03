// var nome = "Luizinho";

// if(nome != ""){
//     let nome = "Nicolly";
// }

// console.log(nome);
//Quando declaramos uma variável com var
// o Javascript aplica um processo nestas que chamamos de HOISTING.
//O HOISTING ou elevação, coloca todas as variáveis do tipo var no topo do programa.
//Isso faz com que se existirem variáveis com mesmo nome, elas se sobrepõem.
// let nr1 = 10;
// let nr2 = 5;
// //IF TERNÁRIO - DESCOBRINDO SE O NÚMERO É PAR OU IMPAR
// let resultado = !(nr1 % nr2) ? "PAR" : "IMPAR";
// console.log(resultado);


//Recuperar um elemento do HTML com a função getElementById(parâmetro)
// const mn = document.getElementById("menu");
// console.log(mn.textContent); 

// recuperando uma collection de elementos...
const aElements = document.getElementsByTagName("a"); 
const aElementsArray = [...aElements];

aElementsArray.forEach((a)=>{
console.log(a);

}); 

// declarando um array em javascript

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
// let nr3 = [nr1,nr2];
console.log(nr1);
console.log (nr2);

//operador SPREAD ....
let nr3 = [...nr1,...nr2];
console.log ("NOVO ARRAY" + nr3);


nr3.forEach( (numero)=>{
    console.log("ITEM DO ARRAY: "+ numero);
} );

const imgElements = [...document.getElementsByTagName("img")]; 

// const imgElementsArray = [...imgElements]; 
// console.log(imgElements);

//imprimindo o atributo SRC do elemento com o foreach

imgElements.forEach( (img)=> {
    console.log('Path das imagens: ${img.src}'); 
    
}); 

const botao = document.querySelector("div > button"); 

botao.addEventListener("click"  , () =>{
alert("TCHAU");  
 
}); 