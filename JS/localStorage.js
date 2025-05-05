
// save to Local Storage 

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("archivNotesTitles", JSON.stringify(archivNotesTitles));
    localStorage.setItem("archivNotes", JSON.stringify(archivNotes));
}

// get/read from Local Storage

function getFromLocalStorage() {
    let localNotes = JSON.parse(localStorage.getItem("notes"));
    let localNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
    let localTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
    let localTrashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let localArchivNotes = JSON.parse(localStorage.getItem("archivNotes"));
    let localArchivNotesTitles = JSON.parse(localStorage.getItem("archivNotesTitles"));

    if (localNotes != null) {
        notes = localNotes;
    }

    if (localNotesTitles != null) {
        notesTitles = localNotesTitles;
    }

    if (localTrashNotes != null) {
        trashNotes = localTrashNotes;
    }

    if (localTrashNotesTitles != null) {
        trashNotesTitles = localTrashNotesTitles;
    }

    if (localArchivNotes != null) {
        archivNotes = localArchivNotes;
    }

    if (localArchivNotesTitles != null) {
        archivNotesTitles = localArchivNotesTitles;
    }


}