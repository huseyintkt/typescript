"use strict";
// Function 1
const getTotal1 = (pNumber1, pNumber2) => {
    let total = pNumber1 + pNumber2;
    return 'Total : ' + total;
};
// Function 2
const getTotal2 = (pNumber1, pNumber2 = 10, pNumber3) => {
    if (typeof pNumber3 === 'undefined') {
        let total = pNumber1 + pNumber2;
        return 'Total : ' + total;
    }
    let total = pNumber1 + pNumber2 + pNumber3;
    return 'Total : ' + total;
};
// Function 3
const getTotal3 = (...numberList) => {
    let total = 0;
    for (let index = 0; index < numberList.length; index++) {
        total += numberList[index];
    }
    return 'Total : ' + total;
};
// Function 4
const writeConsole = (pMessage) => {
    console.log(pMessage);
};
