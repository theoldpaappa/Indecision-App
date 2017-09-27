var nameVar = 'Mikko';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Seppo';
nameLet = 'Ismo';
console.log('nameLet', nameLet);

const nameConst = 'Ossi';
console.log('nameConst', nameConst);

function getPetName () {
    const petName = 'Simba';
    return petName;
}

const petName = getPetName();
console.log(petName);


// Block scoping

const fullName = 'Mikko Paappanen';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);