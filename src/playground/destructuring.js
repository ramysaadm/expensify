


// const person = {
//     name:'Ramy',
//     age: 32,
//     location:{
//         city: 'Dubai',
//         temp: 88
//     }
// };

// const {age, name: firstName ='Anonymous'} = person;
// console.log(`${firstName} is ${age}.`)

// const {city, temp:temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature } in ${city}.`)
// }

// const book={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name: 'Penguin'
//     }
// };

// const {name: publisherName='Self-Published'} = book.publisher;

// console.log(publisherName);

// const address=['120 Topanga','Damac Hills', 'Dubai','12345'];
// const [, city, state='New York'] = address;
// console.log(`Your are in ${city} ${state}.`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const[hotCoffee,,mediumCost ]=item;
console.log(`A medium ${hotCoffee} costs ${mediumCost}`)