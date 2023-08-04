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
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let z = 0; z < arr3.length; z++) {
        domain[count] = arr1[i] + arr2[j] + arr3[z] + extension;
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
function generateList(array, domainExtension) {
  for (let i = 0; i < array.length; i++) {
    let dom = domainExtension;
    let list = document.createElement("li");
    list.classList.add("list-group-item", "text-start");
    list.innerHTML = array[i];
    document.getElementById(dom).appendChild(list);
  }
}
