/*********************************************
 * Access modifier 1
 ********************************************/
class Nurse {
    readonly id: number;
    private name: string;
    public age: number;
    phone: string;

    constructor(id: number, name: string, age: number, phone: string) {
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
    constructor(
        private _name: string,
        private _age: number,
        private _phone: string
    ) {}

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get phone() {
        return this._phone;
    }

    set name(pName: string) {
        if (pName !== '') {
            this._name = pName;
        }
    }

    set age(pAge: number) {
        if (pAge !== 0) {
            this._age = pAge;
        }
    }

    set phone(pPhone: string) {
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
