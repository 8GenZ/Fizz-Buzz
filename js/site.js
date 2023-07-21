// Get the numbers from our form inputs
// ENTRY POINT
// CONTROLLER Function
function getValues() {
    let fizzNumber = document.getElementById('fizzValue').value;
    let buzzNumber = document.getElementById('buzzValue').value;
    let stopNumber = document.getElementById('stopValue').value;

    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);
    stopNumber = Number(stopNumber);

    // make sure there are numbers
    if (isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(stopNumber) == true) {

        Swal.fire({
            title: 'Oops!',
            text: 'FIZZ BUZZ only works with numbers.',
            icon: 'error',
            backdrop: 'false'
        });
        // make sure the stop is greater than fizz and buzz
    } else if (fizzNumber > stopNumber || buzzNumber > stopNumber) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please make sure the Fizz and Buzz value are smaller than the Stop value.',
            icon: 'error',
            backdrop: false
        });
    } else {
        let numberArray = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber);

            displayFizzBuzz(numberArray);
    }






}


// Buisness logic - creates number in the input range
// Data Model
function generateFizzBuzz(Fizz, Buzz, Stop) {

    let range = [];

    for (let number = 1; number <= Stop; number++) {

        let results = "";

        if (number % Fizz == 0 ) results += 'Fizz';
        if (number % Buzz == 0) results += 'Buzz';
        if (number % Fizz, Buzz == 0) results += 'Fizz Buzz'

        range.push(results || number);

    }

    return range;

}


// View Function
//Puts the numbers on the page 
function displayFizzBuzz(range) {

    let tableHtml = '';

    for (let index = 0; index < range.length; index++) {

        let currentNumber = range[index];

        let className = '';

        if (currentNumber == 'Fizz') {
            className = 'Fizz';
        } else if (currentNumber == 'Buzz') {
            className ='Buzz'
        } else if (currentNumber == 'FizzBuzz' ) {
            className = 'fizzBuzz'
        }


        let tableRowHtml = `<tr><td class="${className}">${currentNumber}</td></tr>`;

        tableHtml = tableHtml + tableRowHtml;

    }

    document.getElementById('results').innerHTML = tableHtml;

}