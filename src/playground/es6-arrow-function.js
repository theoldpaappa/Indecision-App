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







// If options exist - function example
/*
function getOptions(options) {
    if (options) {
        return <p>Here are your options: {options}</p>;
    } else {
        return <p>No options exist!</p>;
    }
}
*/

/* Basics
const user = {
    name: 'seppo',
    age: 23,
    location: 'heö'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}                  

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/