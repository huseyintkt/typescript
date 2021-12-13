"use strict";
// ! => does not null
//const anchor = document.querySelector('a')!;
const anchor = document.querySelector('a');
// Kontrolu yapmazsak href'e ulasamiyoruz
if (anchor) {
    console.log(anchor.href);
}
const form = document.querySelector('.form');
const select = document.querySelector('.select');
const input = document.querySelector('.input');
// Value degerini number olarak alir
console.log(input.valueAsNumber);
