// Function 1
const getTotal1 = (pNumber1: number, pNumber2: number): string => {
    let total = pNumber1 + pNumber2;
    return 'Total : ' + total;
};

// Function 2
const getTotal2 = (
    pNumber1: number,
    pNumber2: number = 10,
    pNumber3?: number
): string => {
    if (typeof pNumber3 === 'undefined') {
        let total = pNumber1 + pNumber2;
        return 'Total : ' + total;
    }
    let total = pNumber1 + pNumber2 + pNumber3;
    return 'Total : ' + total;
};

// Function 3
const getTotal3 = (...numberList: number[]): string => {
    let total: number = 0;
    for (let index = 0; index < numberList.length; index++) {
        total += numberList[index];
    }
    return 'Total : ' + total;
};

// Function 4
const writeConsole = (pMessage: string | number): void => {
    console.log(pMessage);
};
