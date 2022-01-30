console.log('Welcome to notes app.This is app.js');
showNotes();
//Adding a note to local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {


    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});

//Function will show note in id = notes
//Function to show notes from localStorage

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += ` 
        <div class="my-2 mx-2 lcard" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>
        `;
    });

    let notesElem = document.getElementById('notes')
    if (notes.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML('Nothing to show!Click "Add a note" to get started');
    }
}
//function to delete note
function deleteNote(index) {
    console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchtxt')
search.addEventListener("input",function(){

    let inputVal = search.value
    console.log('Fire',inputVal);
    let noteCards = document.getElementsByClassName('lcard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        //console.log(cardTxt) 
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
        
    })
})