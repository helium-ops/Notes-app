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

input.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        createTask();
    }
})

const addTitle = (e)=>{
    if(e.target.closest(".note")){
      const note = e.target.closest(".note");;
      const titleArea = note.querySelector("input");
      titleArea.addEventListener("keyup",(e)=>{
        if(e.key === "Enter"){
            const title = titleArea.value;
            note.querySelector(".title-view").innerHTML = `
            <h1>${title}</h1>
    <button class="view"><i class="fa-solid fa-arrows-to-eye"></i></button>
            `
        }
      } )
    }
}

notesArea.addEventListener("click", addTitle);
notesArea.addEventListener("click", (e) => {
    const viewBtn = e.target.closest(".view");

    if (viewBtn) {
        const note = viewBtn.closest(".note");
        console.log(note);

        window.location.href = "../view-task-area/view-task.html";
    }
});
