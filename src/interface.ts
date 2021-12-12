/*********************************************
 * Interface 1
 ********************************************/
interface IDatabase {
    add(): void;
    get(): void;
    delete(): void;
    update(): void;
}

class MySql implements IDatabase {
    add() {
        console.log('MySql Add');
    }
    get() {
        console.log('MySql Get');
    }
    delete() {
        console.log('MySql Delete');
    }
    update() {
        console.log('MySql Update');
    }
}

let mySql = new MySql();
mySql.add();
mySql.get();
mySql.update();
mySql.delete();

class MongoDB implements IDatabase {
    add() {
        console.log('MongoDB Add');
    }
    get() {
        console.log('MongoDB Get');
    }
    delete() {
        console.log('MongoDB Delete');
    }
    update() {
        console.log('MongoDB Update');
    }
}

let mongoDB = new MongoDB();
mongoDB.add();
mongoDB.get();
mongoDB.update();
mongoDB.delete();

function addDatabase(db: IDatabase) {
    db.add;
}

addDatabase(new MySql());
addDatabase(new MongoDB());

/*********************************************
 * Interface 2
 ********************************************/
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
    getAge(): number;
}

class Employee implements IPerson {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getAge() {
        return this.age;
    }
}

class Student implements IPerson {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getAge() {
        return this.age;
    }
}

let employee1 = new Employee('Jack', 'Rossi', 25);
let fullNameEmployee = employee1.getFullName();
let ageEmployee = employee1.getAge();

console.log('Name of Person: ' + fullNameEmployee + 'Age: ' + ageEmployee);

let student1 = new Student('Mario', 'Rossi', 34);
let fullNameStudent = student1.getFullName();
let ageStudent = student1.getAge();

console.log('Name of Person: ' + fullNameStudent + 'Age: ' + ageStudent);

/*********************************************
 * Interface 3
 ********************************************/
interface User {
    readonly id: number;
    name: string;
    age?: number;
}

let user1: User = {
    id: 1,
    name: 'John',
};

let user2: User = {
    id: 2,
    name: 'Mario',
    age: 23,
};
