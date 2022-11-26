var name = 'Kuddus';
function add(a, b) {
    var sum = a + b;
    function double(c) {
        return c * 2;
    }
    var total = double(sum);
    return total;
}

console.log('name outside - ', name);
console.log(add(5, 6));
console.log('sum outside-', sum);