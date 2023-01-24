// VARIABLES

let user = document.getElementById("userName").value;

document.getElementById("userData").innerHTML = user

console.log(userData);

const length = document.getElementById("tripLength").value;

document.getElementById("trip").innerHTML = length

console.log(tripLength);

const age = document.getElementById("customerAge").value;

document.getElementById("userAge").innerHTML = age

console.log(customerAge);

// CALC FORMULA

if (age < 18) {
    price = length * 0.21 * (1 - 20 / 100);
}

else if (age >= 65) {
    price = length * 0.21 * (1 - 40 / 100);
}

else {
    price = length * 0.21;
}

console.log(price);

// DATA PRINTING

go.addEventListener(
    "click",
    function () {
        document.getElementById("result").innerHTML = price;
    }
);