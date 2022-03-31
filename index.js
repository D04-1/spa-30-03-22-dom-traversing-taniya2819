/**
 * was mir an euren Lösungen bisher aufgegallen ist:
 * -Versucht Funktionen zu verwenden
 * -querySelectorAll() gibt eine NodeList = Array
 *
 */
/*const header = document.querySelector("header");
console.log(header);
console.log(header.children);
console.log(header.hasChildNodes);
header.closest("header").style.border = "5px solid #76749E";*/

const erstesH1Element = document.querySelector("h1");
const headerInDerNaeheElement = erstesH1Element.closest("header");
headerInDerNaeheElement.style.border = "5px solid grey";

//Aufgabe 2

const alleH1PackageTitles = document.querySelectorAll(
  "section.info section.info-package .package-title"
);

alleH1PackageTitles.forEach((element) => {
  const img = element.previousElementSibling;
  img.style.border = "2px solid black";
});
//Aufgabe 3

const lebelElements = document.querySelectorAll("label");
labelElements.forEach((element) => {
  if (element.className.indexOf("mild") != -1) {
    element.style.borderBottom = "2px solid yellow";
  } else if (element.className.indexOf("intense") != -1) {
    element.style.borderBottom = "2px solid orange";
  } else {
    element.style.borderBottom = "2px solid red";
  }
});

// Aufgabe 4

const navLinks = document.querySelectorAll(".nav-list li");
const siteMapList = document.querySelector(".site-map");
navLinks.forEach((element) => {
  siteMapList.append("<h3>hallo</h3>");
});
