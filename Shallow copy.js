let firstPerson = {
    name : 'saran kumar',
    age : 25,
    address : {
        city : 'Rajpura',
        state : 'Punjab',
        Country : 'India'
    }
}

let secondPerson = {...firstPerson};  // shallow copy 

firstPerson.name = 'premi';
firstPerson.address.city = 'patiala';
console.log(firstPerson);

console.log(secondPerson);  

