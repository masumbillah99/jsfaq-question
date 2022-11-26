// const friendlyPerson = {
//     firstName: 'Hero',
//     lastName: 'Alom',
//     salary: 19000
// }

// // const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// // friendlyChargeBill(1000);
// // friendlyChargeBill(1000);

// const person2 = {
//     firstpart: 'Jabed',
//     lastpart: 'Mia',
//     salary: 10000
// }
// // const person2Bill = person.getchargeBill.bind(person2);
// // person2Bill(500);
// // person2Bill(200);

// // person.getchargeBill.call(person2, 600, 60);
// // person.getchargeBill.call(person2, 500, 50);
// person.getchargeBill.apply(person2, [700, 70]);
// person.getchargeBill.apply(person2, [900, 70]);
// console.log("Bill kater por salary : ", person2.salary);
// // console.log(person.salary);

const farmer = {
    fname: 'Abdul',
    lname: 'Kuddus',
    salary: 5000,
    getFullName: function () {
        console.log(this.fname, this.lname);
    },
    tax: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const driver = {
    fname: 'Abdul',
    lname: 'Khan',
    salary: 4000
}
const driverTax = farmer.tax.bind(driver);
// driverTax(400);

const rickshawpuller = {
    fname: 'Abdul',
    lname: 'Rahim',
    salary: 3000
}
farmer.tax.call(rickshawpuller, 800, 180, 20);
console.log(rickshawpuller);

farmer.tax.apply(rickshawpuller, [700, 170, 30]);
console.log(rickshawpuller);


// console.log(Math.max.apply(Math,[1,4,2,5,3]));