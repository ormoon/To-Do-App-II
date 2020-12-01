const Notes = 'my_note';
let notesArr = localStorage.getItem(Notes) ? JSON.parse(localStorage.getItem(Notes)) : [];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
window.onload = function () {
    displayNotes();
}

function addNote() {
    let note = document.getElementById('noteArea').value;
    const noteDetail = {};
    let today = new Date();
    let date = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    noteDetail.id = today.getTime();
    noteDetail.title = document.querySelector('#input').value;
    noteDetail.content = note;
    noteDetail.time = date + " " + time;
    notesArr.push(noteDetail);
    localStorage.setItem(Notes, JSON.stringify(notesArr));
    clearInput();
    displayNotes();
}

function clearInput() {
    document.getElementById('noteArea').value = null;
    document.querySelector('#input').value = null;
}

function displayNotes() {
    let note_html = '';
    notesArr.forEach((note, index) => {
        note_html = note_html + `<fieldset>
        <legend class="_legend"> ${note.title}</legend>
        <span>${note.time}</span>
        <div class="save">
        <h4>${note.content}</h4>
        <button class = "deleteButton" onclick="deleteNote(${index})">Delete</button>
        </div>
        </fieldset>`
    });
    document.querySelector('.saved').innerHTML = note_html;
}



function deleteNote(index) {
    notesArr.splice(index, 1);
    localStorage.setItem(Notes, JSON.stringify(notesArr));
    displayNotes();
}

