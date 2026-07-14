const fs = require("fs");
const chalk = require("chalk");

const noteFileName = "notes.json";

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(noteFileName);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync(noteFileName, JSON.stringify(notes, null, 2));
};

const addNote = (title, body) => {
  const notes = loadNotes();

  if (notes.some(note => note.title === title)) {
    console.log(chalk.red.inverse("Note title taken"));
    return;
  }

  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.green.inverse("New note added"));
};

const removeNote = title => {
  const notes = loadNotes();
  const kept = notes.filter(note => note.title !== title);

  if (notes.length === kept.length) {
    console.log(chalk.yellow.inverse("Nothing to remove"));
    return;
  }

  saveNotes(kept);
  console.log(chalk.green.inverse("Removed: " + title));
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (!note) {
    console.log(chalk.red.inverse("Note not found"));
    return;
  }

  console.log(chalk.blue.bold(note.title));
  console.log(chalk.green(note.body));
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.yellow("No notes yet"));
    return;
  }

  console.log(chalk.cyan.bold("Your notes:"));
  notes.forEach(note => {
    console.log(chalk.blue("- " + note.title) + ": " + note.body);
  });
};

const editNote = (title, newTitle, newBody) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (!note) {
    console.log(chalk.red.inverse("Note not found"));
    return;
  }

  if (newTitle && newTitle !== title && notes.some(n => n.title === newTitle)) {
    console.log(chalk.red.inverse("New title already taken"));
    return;
  }

  if (newTitle) note.title = newTitle;
  if (newBody) note.body = newBody;

  saveNotes(notes);
  console.log(chalk.green.inverse("Note updated"));
};

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes,
  editNote
};
