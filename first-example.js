const os = require('os');
const fs = require('fs');

let cpu = os.cpus();

let createFile = () => {
    fs.appendFile('exampleone.txt', `Esta es la info de la cpu ${JSON.stringify(cpu)}`, (error) => {
        if(error)
            console.log('Error creando el archivo');
    });
}

module.exports = {
    createFile
}


