
let allNotes = {
    'notesTitles' : [],
    'notes' : [],
    'trashNotesTitles' : [],
    'trashNotes' : [],
    'archivNotesTitles' : [],
    'archivNotes' : [],
};

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(noteTitle[0]);

    init();
}

function init() {
    getFromLocalStorage();
    renderNotes();
    renderTrashNotes();
    renderArchivNotes();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNotesTemplate(indexTrashNote);
    }
}

function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
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

    allNotes.notes.push(noteInput);
    allNotes.notesTitles.push(noteTitle);

    init();

    // Input clear
    noteInputRef.value = "";
    noteTitleInputRef.value = "";
}


// delete complete Note

function completeNotedelete(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    init();
}


// delete complete Archiv Note

function completeArchivNotedelete(indexArchivNote) {
    allNotes.archivNotes.splice(indexArchivNote, 1);
    allNotes.archivNotesTitles.splice(indexArchivNote, 1);

    init();
}



