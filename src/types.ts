let myText: string = 'Lorem ipsum';
let myNumber: number = 34;
let myArray1: [] = [];
let myArray2: string[] = ['Hello', 'World'];
let myArray3 = [] as string[];
let myArray4: Array<string> = ['Hello', 'World'];
let myArray5: (string | number)[] = [];
let myArray6: [string, number, boolean] = ['Hello', 5, true];
let myArray7: any[] = [];

let myValue1: string | number = 'Hello';
let myValue2: string | number = 34;

type StringOrNumber = string | number;
let myValue3: StringOrNumber = 'Hello';
let myValue4: StringOrNumber = 34;

let employee: [number, string, boolean][];
employee = [
    [1, 'Jack', true],
    [2, 'Jack', true],
    [3, 'Jack', false],
    [4, 'Jack', true],
];

let person: {
    firstName: string;
    lastName: string;
    age: number;
} = {
    firstName: 'Jack',
    lastName: 'Rossi',
    age: 30,
};
