// // show greeting after 5s
// const myTimeout = setTimeout(mySalam, 5000);
// function mySalam() {
//     document.getElementById("greet").innerHTML = "Assalamualikum Orahmatullah Oyabarakatu!";
// }

// // open a new window and close after 3s
// function openWindow() {
//     const myWindow = window.open('', '', "width=500, height=350");
//     setTimeout(() => {
//         myWindow.close()
//     }, 3000);
// }

// // stop greeting in 3 seconds
// const myTimeout2 = setTimeout(myGreet, 3000);
// function myGreet() {
//     document.getElementById("stopGreet").innerHTML = "Welcome sir!";
// }
// function stopGreet() {
//     clearTimeout(myTimeout2);
// }

// // toggle between two background colors
// // myInterval = setInterval(changeBg, 500);
// // function changeBg() {
// //     let x = document.body;
// //     x.style.backgroundColor = x.style.backgroundColor == "darkgreen" ? "green" : "darkgreen";
// // }
// // function stopBg() {
// //     clearInterval(myInterval);
// // }


// console.log(1000);
// console.log(2000);

// setTimeout(() => {
//     console.log(3000);
// }, 2000);

// console.log(4000);
// console.log(5000);

// const my_timeout = setTimeout(greeting, 3000);

// function greeting() {
//     // alert("Hey! you are in danger");
// };


// The setTimout() and clearTimeout() methods
let counter = 1;
let timeout;
let timer_on = 0;

function setCounting() {
    document.getElementById("input").value = counter;
    counter++;
    timeout = setTimeout(setCounting, 1000);
}

function startCount() {
    if (!timer_on) {
        timer_on = 1;
        setCounting();
    }
}

function stopCount() {
    clearTimeout(timeout);
    timer_on = 0;
}