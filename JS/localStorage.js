
// save to Local Storage 

function saveToLocalStorage() {
    localStorage.setItem("allNotes.notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("allNotes.notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("allNotes.trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem("allNotes.trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("allNotes.archivNotesTitles", JSON.stringify(allNotes.archivNotesTitles));
    localStorage.setItem("allNotes.archivNotes", JSON.stringify(allNotes.archivNotes));
}

// get/read from Local Storage

function getFromLocalStorage() {
    let localNotesTitles = JSON.parse(localStorage.getItem("allNotes.notesTitles"));
    let localNotes = JSON.parse(localStorage.getItem("allNotes.notes"));
    let localTrashNotesTitles = JSON.parse(localStorage.getItem("allNotes.trashNotesTitles"));
    let localTrashNotes = JSON.parse(localStorage.getItem("allNotes.trashNotes"));
    let localArchivNotesTitles = JSON.parse(localStorage.getItem("allNotes.archivNotesTitles"));
    let localArchivNotes = JSON.parse(localStorage.getItem("allNotes.archivNotes"));

    if (localNotes != null) {
        allNotes.notes = localNotes;
    }

    if (localNotesTitles != null) {
        allNotes.notesTitles = localNotesTitles;
    }

    if (localTrashNotes != null) {
        allNotes.trashNotes = localTrashNotes;
    }

    if (localTrashNotesTitles != null) {
        allNotes.trashNotesTitles = localTrashNotesTitles;
    }

    if (localArchivNotes != null) {
        allNotes.archivNotes = localArchivNotes;
    }

    if (localArchivNotesTitles != null) {
        allNotes.archivNotesTitles = localArchivNotesTitles;
    }


}