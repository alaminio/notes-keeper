# Notes Keeper

A tiny command-line note-taking app built with Node.js. Notes persist to a local `notes.json` file.

## Features

- Add, list, read, edit, and remove notes
- Duplicate-title protection
- Colorized terminal output

## Requirements

- Node.js >= 14

## Installation

```bash
git clone https://github.com/alaminio/notes-keeper.git
cd notes-keeper
npm install
```

## Usage

```bash
node app.js <command> [options]
```

### Add a note

```bash
node app.js add --title="Shopping" --body="Milk, eggs, bread"
```

### List all notes

```bash
node app.js list
```

### Read a note

```bash
node app.js read --title="Shopping"
```

### Edit a note

```bash
node app.js edit --title="Shopping" --new-title="Groceries" --new-body="Milk, eggs, bread, coffee"
```

Either `--new-title` or `--new-body` (or both) may be provided.

### Remove a note

```bash
node app.js remove --title="Shopping"
```

### Help

```bash
node app.js --help
```

## Data storage

Notes are stored as JSON in `notes.json` in the current working directory. The file is git-ignored.

## License

MIT
