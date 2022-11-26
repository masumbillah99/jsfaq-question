class Person {
    constructor(fname, lname, salary) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }
}

const fisherman = new Person('Alom', 'Khan', 700);
console.log(fisherman);

const hawker = new Person('Khan', 'Ali', 550);
console.log(hawker);


function object(fname, lname, salary) {
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
}

const doctor = new object('Rahat', 'Mia', 800);
console.log(doctor);