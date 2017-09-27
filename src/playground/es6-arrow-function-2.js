// arguments object - no longer bound with arrow functions

const add = (a, b) =>  {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Mikko',
    cities: ['Suonenjoki', 'Jyväskylä', 'Tokio'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' on asunut ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((multiplied) => this.multiplyBy * multiplied);
    }
};

console.log(multiplier.multiply());