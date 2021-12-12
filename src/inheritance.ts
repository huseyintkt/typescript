class Person {
    name: string;
    age: number;
    phone: string;

    constructor(name: string, age: number, phone: string) {
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
    salary: number;

    constructor(name: string, age: number, phone: string, salary: number) {
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
