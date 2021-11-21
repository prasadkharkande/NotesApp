// const fs = require('fs');

// //fs.writeFileSync('notes.txt', 'My name is Prasad Kharkande.');
// fs.appendFileSync('notes.txt', ' I love food and tech.');

// const name = require('./utils.js');

// const sum = addition(4,5);

// //const name = 'Prasad';
// console.log(name);


// const add = require('./utils.js')

// const sum = add(4,5);
// console.log(sum);
// // console.log(addition(5,5));


// ===============================================================

const notes = require('./notes.js');
const chalk = require('chalk')
const yargs = require('yargs')

// const note = getNotes();
// console.log(note);

// // const validator = require('validator')
// // console.log(validator.isEmail('dsdjnbar.com'));
// // console.log(validator.isURL('abc'));


// console.log(chalk.green.inverse.bold(' Success! '));
// console.log(chalk.blue.inverse.bold(' Hello! '));

console.log(process.argv);

//customize yargs version
yargs.version('1.1.0')

//add remove read list
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe:'Note title',
            demandOption : true
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// const command = process.argv[2]

// if (command === 'add'){
//     console.log('adding note!')
// }else if(command === 'remove'){
//     console.log("Removing note")
// }