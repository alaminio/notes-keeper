const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.0.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
    body: { describe: "Note body", demandOption: true, type: "string" }
  },
  handler: argv => notes.addNote(argv.title, argv.body)
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: { describe: "Title to remove", demandOption: true, type: "string" }
  },
  handler: argv => notes.removeNote(argv.title)
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => notes.listNotes()
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: { describe: "Title to read", demandOption: true, type: "string" }
  },
  handler: argv => notes.readNote(argv.title)
});

yargs.command({
  command: "edit",
  describe: "Edit an existing note",
  builder: {
    title: { describe: "Title of note to edit", demandOption: true, type: "string" },
    "new-title": { describe: "New title", type: "string" },
    "new-body": { describe: "New body", type: "string" }
  },
  handler: argv => notes.editNote(argv.title, argv["new-title"], argv["new-body"])
});

yargs.demandCommand(1, "Pass a command. Try --help").strict().parse();
