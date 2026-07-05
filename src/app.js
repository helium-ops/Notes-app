const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const notesArea = document.querySelector(".note-area");

addBtn.addEventListener("click", ()=>{
    let note = document.createElement("div");
    note.innerHTML = `
    <button class="view"><i class="fa-solid fa-arrows-to-eye"></i></button>
    <p class="text">${input.value}</p>`
    notesArea.appendChild(note);
    note.classList.add("note");
})