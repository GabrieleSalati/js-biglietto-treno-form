// VARIABLES

let inputName = document.getElementById("userName");

console.log(userData);

const inputLength = document.getElementById("tripLength");

console.log(tripLength);

const inputAge = document.getElementById("customerAge");

console.log(customerAge);

// CALC FORMULA

go.addEventListener(
    "click",
    function () {

        // Richiesta nome

        let user = inputName.value;

        // Richiesta lunghezza viaggio

        const length = inputLength.value;

        // Richiesta eta' passeggero

        const age = inputAge.value;

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

        document.getElementById("userData").innerHTML = user;
        document.getElementById("trip").innerHTML = length;
        document.getElementById("userAge").innerHTML = age;
        document.getElementById("result").innerHTML = price;

        console.log(price);
    }
);

// DISPLAY VALUES

