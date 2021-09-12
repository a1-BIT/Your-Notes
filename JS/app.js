console.log("Hi there");
//showTitle();
showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addtxt.value = "";
  console.log(noteObj);
  //showTitle();
  showNotes();
});
//set notes to localstorage and show it on the screen
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  let html = "";
  //---------------------------------------- for title
    // let title = document.getElementById('cardTitle');
    // title.value="";
/* 
    let title = document.getElementById("cardTitle");
  let noteTitle = localStorage.getItem("noteTitle");
  if (noteTitle == null) {
    noteTitleObj = [];
  } else {
    noteTitleObj = JSON.parse(noteTitle);
  }
  noteTitleObj.push(title.value);
  localStorage.setItem("noteTitle", JSON.stringify(noteTitleObj));
  title.value = "";

  let noteTitle = localStorage.getItem("noteTitle");
  if (noteTitle == null) {
    noteTitleObj = [];
  } else {
    noteTitleObj = JSON.parse(noteTitle);
  } */
  //--------------------------------------
  noteObj.forEach(function (element, index) {
    html =
      html +
      `<div class="noteCard card my-2 mx-2" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title">Note${index+1}</h5>
          <div class="input-group mb-3">
  
            <p class="card-text">${element}</p>
          </div>
          <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
  });

  let noteElm = document.getElementById("notes");
  if (noteObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = `Nothing to show "use add notes" to save notes.`;
  }
}
//Function for Delete notes
function deleteNote(index) {
  console.log("Hi I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();
}
// Search note
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value;
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByClassName("card-text")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
