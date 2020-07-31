const fs = require('fs') 
const chalk = require('chalk');


const addNote =  (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title ===title)
    if(!duplicateNote){
        notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse("Note Saved"))
    }else {
        console.log(chalk.red.inverse("Note Not Saved"))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const nootsToKeep = notes.filter((notes)=>notes.title !== title)
    if(notes.length > nootsToKeep.length){
        console.log(chalk.green.inverse("Note Nemoved"));
        saveNotes(nootsToKeep)
    }else{
        console.log(chalk.red.inverse("NO Note Found"));
    }
    
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.whiteBright.inverse("Your Notes..."))
    notes.forEach((note)=> {
        console.log(chalk.inverse(note.title))
    })

}

const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title ===title)
     if (note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
     }else{
        console.log(chalk.red.inverse('Note Not Avalaible'));
     }

}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}