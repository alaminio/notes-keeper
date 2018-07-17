# Notes Keeper - Command line note app

## Getting Started

These instructions will lead to setup Notes Keeper app.

## Introduction ##

This application a text database file to store note.
We can keep notes, update, delete or modify

## Dependency

* Node >=v8.11.3
* npm or yarn

## How to run

* `npm install`
* `node app.js add -t="Title of note" -d="Description os note"`
* `node app.js remove -t="Title of note"`
* `node app.js edit -t="Title of note" -newTitle="New title" -newDesc="New description"`
* `node app.js read -t="Title of note"`
* `node app.js complete -t="Title of note"`
* `node app.js list-complete`
* `node app.js list-pending`
