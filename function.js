function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, "- is even number");
        }
        else {
            console.log(num, "- is odd number");
        }
    }
}

var nums = [65, 23, 4, 7, 12, 5, 18];
evenify_all(nums);

var friends_age = [22, 19, 21, 23, 20, 18];
evenify_all(friends_age);


function findEvenify_all(num) {
    if (num % 2 === 0) {
        console.log(num, ': is even number');
    }
    else {
        console.log(num, ': is odd number');
    }
}

let nums = [5, 12, 45, 94, 69, 6];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    findEvenify_all(num);
}

let friendsAge = [22, 19, 25, 20, 18, 23];
for (let i = 0; i < friendsAge.length; i++) {
    const age = friendsAge[i];
    findEvenify_all(age);
}


var a = 10;
var c = 20;
var b = 30;
var max;
if (a > b && a > c) {
    max = a;
}
else if (b > a && b > c) {
    max = b;
}
else {
    max = c;
}


function addTodo(task) {
    const taskElement = document.createElement('li');
}

let name = 'Rashed';
function addUser() {
    let romanticName = 'Jantoos';
    console.log(romanticName);
}
addUser();

// IIFE-- Immediately Invoked Function Expression
Syntax:
// (Function() {
    // statements;
// }) ();

let name2 = 'Rashed';
(function addUser() {
    let romanticName = 'Jantoos';
    console.log(romanticName);
})();


function hello() {
    console.log("hello world");
}
hello();