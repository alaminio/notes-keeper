const yargs = require('yargs');
var notes = require('./notes');

var argv = yargs
    .demandCommand(1, "not enough command found")
    .alias('t', 'title')
    .alias('d', 'desc')
    .alias('h', 'help')
    .alias('v', 'version')
    .usage('Usage: node $0 <command> [options]')
    .example("Dummy example!")
    .describe('t', 'Put some title')
    .describe('d', 'Put some desc')
    .argv;
var command = argv._[0];

if(command === 'add') {
    var note = {
        title: argv.title,
        desc: argv.desc,
        completed: false
    }
    notes.add(note, (err, message) => {
        if(err) {
            console.log(err);
        } else {
            console.log(message);
        }
    });
} else if(command === 'read') {
    var title = argv.title;
    console.log('Reading note');
}
