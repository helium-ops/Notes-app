const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const notesArea = document.querySelector(".note-area");

let currentNote = null;
const createTask =  ()=>{
    let note = document.createElement("div");
    note.innerHTML = `
    <div class="title-view">
    <h1></h1>
    <input type="text" placeholder="Add a title.....">
    <button class="view"><i class="fa-solid fa-arrows-to-eye"></i></button>
    </div>
    <p class="text">${input.value}</p>`;
    notesArea.appendChild(note);
    if(document.querySelector(".text").textContent.length > 20){
        document.querySelector(".text").innerHTML += "...";
    }
    note.classList.add("note");
    currentNote = note;
    localStorage.setItem("note", note);
}
addBtn.addEventListener("click", createTask);



const addTitle = (e)=>{
    if(e.target.closest(".note")){
      const note = document.querySelector(".note");
      const titleArea = document.querySelector(".note input");
      titleArea.addEventListener("keyup",(e)=>{
        if(e.key === "Enter"){
            const title = titleArea.value;
            document.querySelector(".title-view").innerHTML = `
            <h1>${title}</h1>
    <button class="view"><i class="fa-solid fa-arrows-to-eye"></i></button>
            `
        }
      } )
    }
}

notesArea.addEventListener("click", addTitle)
notesArea.addEventListener("click", (e)=>{
    if(e.target.closest(".note")){
      const note = document.querySelector(".note");
      const viewBtn = document.querySelector(".view");
      viewBtn.addEventListener("click", ()=>{
        window.location.href = "../view-task-area/view-task.html";
      })
    }
})
