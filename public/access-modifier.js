"use strict";
/*********************************************
 * Access modifier 1
 ********************************************/
class Nurse {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log('Nurse is created');
    }
    getNurseInfo() {
        console.log(`${this.name} ${this.age} ${this.phone}`);
    }
}
let nurse = new Nurse(1, 'Elisa', 24, '00 000 000 0000');
nurse.age;
nurse.getNurseInfo();
/**
 * Inaccessible
 */
// nurse.id = 5;
// nurse.name;
/*********************************************
 * Access modifier 2
 ********************************************/
class Lawyer {
    constructor(_name, _age, _phone) {
        this._name = _name;
        this._age = _age;
        this._phone = _phone;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get phone() {
        return this._phone;
    }
    set name(pName) {
        if (pName !== '') {
            this._name = pName;
        }
    }
    set age(pAge) {
        if (pAge !== 0) {
            this._age = pAge;
        }
    }
    set phone(pPhone) {
        if (pPhone !== '') {
            this._phone = pPhone;
        }
    }
}
let lawyer = new Lawyer('Elisa', 24, '00 000 000 0000');
lawyer.age;
lawyer.age = 36;
lawyer.age = 0; // does not work
console.log(lawyer.age); // 36
