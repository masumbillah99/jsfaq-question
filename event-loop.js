/**   code 1   */

const second = () => console.log("I am second");
const third = () => console.log("I am third");
const first = () => {
    console.log("I am first");
    second();
    third();
}

// first();

const four = () => {
    console.log('\n' + "I am four");
    setTimeout(third, 0);
    second();
}

// four();


/**      Anisul islam tutorial        */
/**      Synchronous Javascript      */
console.log("\n");
// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");
// console.log("hello 4");
// console.log("hello 5");


/**     Asynchronous Javascript   */
function hello1() {
    console.log("function number 1");
}

function dataLoad() {
    console.log("Here we load data");
}

function hello2() {
    setTimeout(dataLoad, 1);
}

function hello3() {
    console.log("function number 3");
}

hello1();
hello2();
hello3();