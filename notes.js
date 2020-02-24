const fs = require("fs");
const chalk = require("chalk");
const noteFileName = "notes.json";

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => {
    return note.title === title;
  });

  try {
    console.log(chalk.green(note.body));
  } catch (e) {
    console.log(chalk.red.inverse("this note doesn't exists"));
  }
};

const getNotes = () => {
  const notes = loadNotes();

  notes.forEach(note => {
    console.log(chalk.blue(note.title + ": " + note.body));
  });
};

// add new notes
const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find(note => {
    return note.title === title;
  });

  debugger;

  if (duplicateNotes) {
    console.log(chalk.red.inverse("Note title taken"));
    return;
  }

  notes.push({
    title,
    body
  });

  saveNotes(notes);
  console.log(chalk.green("new note added"));
};

// remove a note
const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => {
    return note.title != title;
  });

  if (notes.length === filteredNotes.length) {
    console.log(chalk.yellow.inverse("nothing to remove"));
    return;
  }

  saveNotes(filteredNotes);
  console.log(chalk.green.inverse.italic("removed: " + title));
};

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync(noteFileName, dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(noteFileName);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNotes,
  getNotes,
  removeNote,
  readNote
};
