/*function square(x) {
    return x * x;
};

console.log(square(3));

// Arrow function
//const squareArrow = (x) => {
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(5));
*/


/*
const getFirstName = (firstName) => {
        firstName = fullName.split(' ')[0];
        console.log(firstName);
};
*/

const fullName = 'Mikko Paappanen';
let firstName;

const getFirstNameOne = (firstName) => {
    firstName = fullName.split(' ')[0];
    return firstName;
}

console.log(getFirstNameOne(firstName));


const fullNameTwo = 'Seppo Ilmarinen';
let firstNameTwo;

const getFirstNameTwo = (firstNameTwo) => fullNameTwo.split(' ')[0];
console.log(getFirstNameTwo(firstNameTwo));