

function getNotesTemplate(indexNote) {
    return `
        <div class="note-txt-div">
            <p>${allNotes.notesTitles[indexNote]} : ${allNotes.notes[indexNote]}</p>
            <button class="T-btn" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">T</button>
            <button class="A-btn" onclick="moveNote(${indexNote}, 'notes', 'archivNotes')">A</button>
        </div>`
}

function getTrashNotesTemplate(indexTrashNote) {
    return `
        <div class="trash-txt-div">
            <p>${allNotes.trashNotesTitles[indexTrashNote]} : ${allNotes.trashNotes[indexTrashNote]}</p>
            <button class="x-btn" onclick="completeNotedelete(${indexTrashNote})">x</button>
            <button class="N-btn" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">N</button>
            <button class="A-btn" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'archivNotes')">A</button>
        </div>`
}

function getArchivNotesTemplate(indexArchivNote){
    return `
        <div class="archiv-txt-div">
            <p>${allNotes.archivNotesTitles[indexArchivNote]} : ${allNotes.archivNotes[indexArchivNote]}</p>
            <button class="x-btn" onclick="completeArchivNotedelete(${indexArchivNote})">x</button>
            <button class="N-btn" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')">N</button>
            <button class="T-btn" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">T</button>
        </div>
    `
}