const fs = require('fs')
const argv = require('./config/yargs').argv

// const multiply = require('./multiplicar/multiplicar')

// Importando una funcion
const {createFile, listTable} = require('./multiplicar/multiplicar')


// Using yargs
let argvExample = process.argv
let command = argv._[0]

console.log(argv)

switch(command){
    case 'list':
        listTable(Number(argv.b), Number(argv.l))
    break
    
    case 'create':
        createFile(Number(argv.b), Number(argv.l))
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
    break

    default:
        console.log("unknown command")

}