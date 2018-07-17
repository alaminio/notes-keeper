const fs = require('fs');
const pathExists = require('path-exists');
const DBFILE = 'db.notes';


var note = {};

function readNotes (fileName, callback) {
    pathExists(fileName).then((exists)=>{
        if(exists) {
            // read the file
            fs.readFile(fileName, (err, data) => {
                if(err) {
                    return callback(err);
                } else {
                    return callback(null, JSON.parse(data));
                }
            });
        } else {
            // create the file
            return writeNotes(fileName, [], (err)=> {
                if(err) {
                    return callback(err);
                }
                return callback(null, []);
            });
        }
    }).catch((e) => {
        callback(e);
    });
}

function writeNotes(fileName, notes, callback) {
    fs.writeFile(fileName, JSON.stringify(notes), (err) => {
        if(err) {
            return callback(err);
        }

        return callback(null, 'Note saved');
    });
}

note.add = (note, callback) => {

    readNotes(DBFILE, (err, notes) => {
        if(err) {
            return callback(err);
        } else {
            notes.push(note);
            writeNotes(DBFILE, notes, (err, msg) => {
                if(err) {
                    return callback(note);
                }
                return callback(null, msg);
            });

        }
    });

};

module.exports = note;
