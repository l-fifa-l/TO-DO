const yargs= require('yargs')
const notes = require('./note.js')



yargs.version('1.1.0')



//adding a new NOTE
yargs.command({
    command : 'add',
    describe: 'Adds a new note.',
    builder:{
        title:{
            describe:'Add title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
})



//removing a existing NOTE
yargs.command({
    command : 'remove',
    describe: 'Removes a existing note.',
    builder:{
        title:{
            describe:'title of note to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.removeNotes(argv.title)
    }
})


//list all of the NOTES
yargs.command({
    command : 'list',
    describe: 'Print list of all the  NOTES.',
    handler (){
        notes.listNotes()
    }
})


//read a NOTE
yargs.command({
    command : 'read',
    describe: 'Read a note',
    builder:{
    title:{
        describe:'read a NOTE',
        demandOption:true,
        type:'string'
    }
},
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
