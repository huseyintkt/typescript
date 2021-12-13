"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Jack', 'Rossi', 'Mario']);
// strArray.push(1); // Throws error
