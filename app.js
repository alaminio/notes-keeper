const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version
yargs.version("0.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      describe: "title to add command",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNotes(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remving the note",
  builder: {
    title: {
      describe: "title to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.removeNote(argv.title);
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: () => {
    notes.getNotes();
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "reading the note",
  builder: {
    title: {
      describe: "title to read",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.readNote(argv.title);
  }
});

// console.log(yargs.argv);
yargs.parse();
