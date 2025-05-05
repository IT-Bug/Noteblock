

function getNotesTemplate(indexNote) {
    return `
        <div class="note-txt-div">
            <p>${notesTitles[indexNote]} : ${notes[indexNote]}</p>
            <button class="T-btn" onclick="pushNotesInTrash(${indexNote})">T</button>
            <button class="A-btn" onclick="pushNotesInArchiv(${indexNote})">A</button>
        </div>`
}

function getTrashNotesTemplate(indexTrashNote) {
    return `
        <div class="trash-txt-div">
            <p>${trashNotesTitles[indexTrashNote]} : ${trashNotes[indexTrashNote]}</p>
            <button class="x-btn" onclick="completeNotedelete(${indexTrashNote})">x</button>
            <button class="N-btn" onclick="pushTrashNotesInNotes(${indexTrashNote})">N</button>
            <button class="A-btn" onclick="pushTrashNotesInArchiv(${indexTrashNote})">A</button>
        </div>`
}

function getArchivNotesTemplate(indexArchivNote){
    return `
        <div class="archiv-txt-div">
            <p>${archivNotesTitles[indexArchivNote]} : ${archivNotes[indexArchivNote]}</p>
            <button class="x-btn" onclick="completeArchivNotedelete(${indexArchivNote})">x</button>
            <button class="N-btn" onclick="pushArchivNotesInNotes(${indexArchivNote})">N</button>
            <button class="T-btn" onclick="pushArchivNotesInTrash(${indexArchivNote})">T</button>
        </div>
    `
}