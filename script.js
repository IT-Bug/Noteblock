
let notesTitles = [];
let notes = [];

let trashNotesTitles = [];
let trashNotes = [];

let archivNotesTitles = [];
let archivNotes = [];


function init() {
    getFromLocalStorage();
    renderNotes();
    renderTrashNotes();
    renderArchivNotes();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNotesTemplate(indexTrashNote);
    }
}

function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNotesTemplate(indexArchivNote);
    }
}


// add Notes && Titles

function addNotesAndTitles() {
    let noteInputRef = document.getElementById('note_input');
    let noteTitleInputRef = document.getElementById('title_input');

    let noteTitle = noteTitleInputRef.value.trim();
    let noteInput = noteInputRef.value.trim();

    if (noteTitle === "" && noteInput === "") {
        alert("Titel und Notiz Hinzufügen");
        noteInputRef.value = "";
        noteTitleInputRef.value = "";
        return;
    } else if (noteTitle === "") {
        alert("Titel wurde noch nicht eingetragen");
        noteInputRef.value = "";
        noteTitleInputRef.value = "";
        return;
    } else if (noteInput === "") {
        alert("Notiz wurde noch nicht eingetragen");
        noteInputRef.value = "";
        noteTitleInputRef.value = "";
        return;
    }

    notes.push(noteInput);
    notesTitles.push(noteTitle);

    saveToLocalStorage();
    renderNotes();

    // Input clear
    noteInputRef.value = "";
    noteTitleInputRef.value = "";
}

// pushed Note in Trash

function pushNotesInTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

// pushed Note in Archiv

function pushNotesInArchiv(indexNote) {
    let archivNote = notes.splice(indexNote, 1);
    archivNotes.push(archivNote[0]);
    let archivNoteTitle = notesTitles.splice(indexNote, 1);
    archivNotesTitles.push(archivNoteTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes();
}

// pushed Trash Note in Archiv

function pushTrashNotesInArchiv(indexTrashNote) {
    let archivNote = trashNotes.splice(indexTrashNote, 1);
    archivNotes.push(archivNote[0]);
    let archivNoteTitle = trashNotesTitles.splice(indexTrashNote, 1);
    archivNotesTitles.push(archivNoteTitle[0]);

    saveToLocalStorage();
    renderTrashNotes();
    renderArchivNotes();
}

// pushed Trash Note in Notes

function pushTrashNotesInNotes(indexTrashNote) {
    let note = trashNotes.splice(indexTrashNote, 1);
    notes.push(note[0]);
    let noteTitle = trashNotesTitles.splice(indexTrashNote, 1);
    notesTitles.push(noteTitle[0]);

    saveToLocalStorage();
    renderTrashNotes();
    renderNotes();
}

// pushed Archiv Note in Notes

function pushArchivNotesInNotes(indexArchivNote) {
    let note = archivNotes.splice(indexArchivNote, 1);
    notes.push(note[0]);
    let noteTitle = archivNotesTitles.splice(indexArchivNote, 1);
    notesTitles.push(noteTitle[0]);

    saveToLocalStorage();
    renderArchivNotes();
    renderNotes();
}

// pushed Archiv Note in Trash
function pushArchivNotesInTrash(indexArchivNote) {
    let trashNote = archivNotes.splice(indexArchivNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = archivNotesTitles.splice(indexArchivNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    saveToLocalStorage();
    renderArchivNotes();
    renderTrashNotes();
}


// delete complete Note

function completeNotedelete(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderTrashNotes();
}

// delete complete Archiv Note

function completeArchivNotedelete(indexArchivNote) {
    archivNotes.splice(indexArchivNote, 1);
    archivNotesTitles.splice(indexArchivNote, 1);

    saveToLocalStorage();
    renderArchivNotes();
}



