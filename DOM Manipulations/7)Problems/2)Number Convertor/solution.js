/*
Write a function that converts a decimal number to binary and hexadecimal.
The given number will always be in decimal format. The "From" select menu will only have a
Decimal option, but the "To" select menu will have two options: Binary and Hexadeicmal. 
This means that our program should have the functionality to convert decimal to binary and
decimal to hexadecimal.
Note that "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal') inside before continue.
Also they should have values ('binary' and 'hexadecimal').
⦁	When the [Convert it] button is clicked, the expected result should appear in the [Result] input field.

*/


function solve() {
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    let button = document.querySelector('button');
    let input = document.querySelector('#input');

    let mathObj = {
        binary: (number) => number.toString(2),
        hexadecimal: (number) => number.toString(16).toUpperCase(),
    }

    optionList.innerHTML = `
<option selected value=""></option>
<option value="hexadecimal">Hexadecimal</option>
<option value="binary">Binary</option>
`

    button.addEventListener('click', () => {
        let result;

        document.getElementById('result').value = mathObj[optionList.value](Number(input.value));
    })

}
