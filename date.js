let date = new Date(`2022-12-18T04:33:20.512Z`);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

const d = new Date();
const [month, day, year] = [
    d.getMonth(),
    d.getDate(),
    d.getFullYear()
];
const [hour, minute, second] = [
    d.getHours(),
    d.getMinutes(),
    d.getSeconds()
];

// console.log([month] + '/' + [day] + '/' + [year]);
// console.log([hour] + ' : ' + [minute] + ' : ' + [second]);

const start = new Date();
let sum = 0;
for (let i = 0; i < 100000000; i++) {
    sum++;
}
const end = new Date();
// console.log('Time elapsed', end - start);

var today = new Date();
let DD = String(today.getDate()).padStart(2, '0');
let MM = String(today.getMonth() + 1).padStart(2, '0');
let YYYY = today.getFullYear();
let hh = today.getHours();
let mm = today.getMinutes();
let ss = today.getSeconds();
today = YYYY + '/' + MM + '/' + DD + '/' + hh + ':' + mm + ':' + ss;
console.log('Date-Time: ', today);