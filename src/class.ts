/*********************************************
 * Class 1
 ********************************************/
class Doctor {
    name: string;
    age: number;
    phone: string;

    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log('Doctor is created');
    }

    getDoctorInfo() {
        console.log(`${this.name} ${this.age} ${this.phone}`);
    }
}

let doctor = new Doctor('Elisa', 24, '00 000 000 0000');

doctor.name;
doctor.getDoctorInfo();

/*********************************************
 * Class 2
 ********************************************/
class Engineer {
    constructor(
        public name: string,
        public age: number,
        public phone?: string
    ) {}

    getEngineerInfo() {
        console.log(`${this.name} ${this.age} ${this.phone}`);
    }
}

let engineer1 = new Engineer('Elisa', 24, '00 000 000 0000');

engineer1.name;
engineer1.getEngineerInfo();

let engineer2 = new Engineer('Elisa', 24);
