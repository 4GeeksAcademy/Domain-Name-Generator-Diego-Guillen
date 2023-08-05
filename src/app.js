/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let arrayCom = generateDomain(pronoun, adj, noun, ".com");
  generateList(arrayCom, "com");
  let arrayUs = generateDomain(pronoun, adj, noun, ".us");
  generateList(arrayUs, "us");
  let arrayOrg = generateDomain(pronoun, adj, noun, ".org");
  generateList(arrayOrg, "org");
  let arrayEdu = generateDomain(pronoun, adj, noun, ".edu");
  generateList(arrayUs, "edu");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const generateDomain = (arr1, arr2, arr3, extension) => {
  let domain = [];
  let count = 0;
  for (let str1 of arr1) {
    for (let str2 of arr2) {
      for (let str3 of arr3) {
        domain[count] = str1 + str2 + str3 + extension;
        count++;
      }
    }
  }
  return domain;
};
/*let domainCom = generateDomain(pronoun, adj, noun, ".com");
let domainUs = generateDomain(pronoun, adj, noun, ".us");
let domainOrg = generateDomain(pronoun, adj, noun, ".org");
let domainEdu = generateDomain(pronoun, adj, noun, ".edu");
console.log(generateDomain(pronoun, adj, noun, ".com"));*/
// Esta funcion recibe el array con los nombres generados, y el id de la <ul> en html.
function generateList(array, idTagUl) {
  //idTagUl es el ID de la <ul> html donde se quiere agregar un <li>
  for (let nameGenerated of array) {
    let list = document.createElement("li"); //crea una <li>
    list.classList.add("list-group-item", "text-start"); //agrega clases Boostrap para el estilo
    list.innerHTML = nameGenerated; //agrego el contenido a la <li> creada
    document.getElementById(idTagUl).appendChild(list); // agrega la <li> a la <ul> con el id = idTagUl
  }
}
