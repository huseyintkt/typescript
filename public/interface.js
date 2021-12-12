"use strict";
class MySql {
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
class MongoDB {
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
function addDatabase(db) {
    db.add;
}
addDatabase(new MySql());
addDatabase(new MongoDB());
class Employee {
    constructor(firstName, lastName, age) {
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
class Student {
    constructor(firstName, lastName, age) {
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
let user1 = {
    id: 1,
    name: 'John',
};
let user2 = {
    id: 2,
    name: 'Mario',
    age: 23,
};
