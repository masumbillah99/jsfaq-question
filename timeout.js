function doSomething() {
    console.log(333);
}

console.log(222);
// setTimeout(doSomething);
console.log(444);

setTimeout(() => {
    console.log("lazy and waiting");
}, 1000);

// setInterval(function () {
//     console.log("doing it again");
// }, 2000);


// stack/callback (mone hoy)
function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    var squared = square(n);
    console.log(squared);
}

printSquare(4);