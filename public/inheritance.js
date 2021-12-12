"use strict";
class Person {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log('Person is created');
    }
    getPersonInfo() {
        console.log(`${this.name} ${this.age} ${this.phone}`);
    }
}
class Teacher extends Person {
    constructor(name, age, phone, salary) {
        super(name, age, phone);
        this.salary = salary;
    }
    getPersonInfo() {
        super.getPersonInfo();
        console.log(this.salary);
    }
    getOtherInfo() {
        console.log('Get other info.');
    }
}
let teacher = new Teacher('Elisa', 24, '00 000 000 0000', 4500);
teacher.getPersonInfo();
teacher.getOtherInfo();
