const { default: chalk } = require('chalk')
const fs = require('fs')
const { title } = require('process')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter( (note)=> note.title === title ) 
    const duplicateNote = notes.find(
        (note)=> note.title ===title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title)=>{
    console.log('removing the ', title)
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note)=> note.title !== title)
    if(notes.length == notesToKeep.length){
        console.log(chalk.red.bold('Title didnt exist in the json file.'))
    }
    else{
        saveNotes(notesToKeep)
        console.log(chalk.green.bold(title, 'removed successfully!'))
    }
   
}

const listNotes = () =>{
    const notes= loadNotes()
    console.log('Getting all the notes !')
    console.log(chalk.inverse('your notes'))

    notes.forEach(element => {
        console.log(element.title)
    });
    
}

const readNote = (title) => {
    const x=16
    debugger
    const notes = loadNotes()
    const note = notes.find((note)=> note.title=== title)

    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('note not found!'))
    }
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote: readNote
}