const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const notesArea = document.querySelector(".note-area");

let note = 0;
addBtn.addEventListener("click", ()=>{
    let note = document.createElement("div");
    note.innerHTML = `
    <div class="title-view">
    <input type="text" placeholder="Add a title.....">
    <button class="view"><i class="fa-solid fa-arrows-to-eye"></i></button>
    </div>
    <p class="text">${input.value}</p>`
    note = input.value;
    notesArea.appendChild(note);
    if(document.querySelector(".text").textContent.length > 20){
        document.querySelector(".text").innerHTML += "...";
    }
    note.classList.add("note");
});

