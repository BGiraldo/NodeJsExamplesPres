/*const fe = require('./first-example');
fe.createFile();*/

const _ = require('lodash');
const argv = require('yargs').argv;

//let argv = process.argv;

console.log(argv);

if(argv.user === 'test'){

        let user1Name = { name: 'pepito'};
let user1LastName = { lastname: 'perez'};
let array = [
    {
        name: 'Jhon',
        lastname: 'Doe'
    },
    {
        name: 'Clark',
        lastname: 'Kent'
    }
]

console.log(_.assign(user1Name, user1LastName));
_.times(3, () => console.log('Hola Mundo'));
console.log(_.find(array, { name: 'Clark', lastname: 'Kent'}));


} else {
    console.log('My test');
}
