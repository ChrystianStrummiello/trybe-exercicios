// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function evento1 (event) {
    event.preventDefault();
}
 HREF_LINK.addEventListener('click', evento1);

 function evento2 (event) {
     event.preventDefault();
 }
 INPUT_CHECKBOX.addEventListener('click', evento2);

 function evento3 (event) {
     event.preventDefault();
     event.key();
 }
 INPUT_TEXT.addEventListener ('keypress', evento3)