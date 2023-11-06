let x = Number(prompt('Print first number'));
let y = Number(prompt('Print second number'));
let z = Number(prompt('Print third number'));

console.log(x, y, z)

const arithmeticAverage = (x + y + z) / 3;

if (isNaN(arithmeticAverage)) {
    alert('All or one of the inputs is not a number.');
} else {
    alert(`Arithmetic average is ${arithmeticAverage}`);
}

