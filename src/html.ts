// ! => does not null
//const anchor = document.querySelector('a')!;
const anchor = document.querySelector('a');

// Kontrolu yapmazsak href'e ulasamiyoruz
if (anchor) {
    console.log(anchor.href);
}

const form = document.querySelector('.form') as HTMLFormElement;
const select = document.querySelector('.select') as HTMLSelectElement;
const input = document.querySelector('.input') as HTMLInputElement;

// Value degerini number olarak alir
console.log(input.valueAsNumber);
